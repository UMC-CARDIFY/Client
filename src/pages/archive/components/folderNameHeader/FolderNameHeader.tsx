import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { useColorUtils } from "@pages/archive/hooks/use-color-utils";
import { colorMap } from "@styles/color-map";
import { EmptyStarIcon } from "@svgs/index";
import React, { useState } from "react";
import { useFolderMark } from "../../hooks/use-archive-folder";
import { ArchiveFolderIcon } from "../ArchiveFolderIcon";
import { StarIcon } from "../StarIcon";
import { DeleteFolderModal } from "../modal/DeleteFolderModal/DeleteFolderModal";
import { EditFolderModal } from "../modal/EditFolderModal/EditFolderModal";

import { deleteFolder } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FolderNameHeaderProps {
  folderId: number;
  folderName: string;
  color: string;
  markState: "ACTIVE" | "INACTIVE";
  onDeleted?: () => void;
}

const FolderNameHeader: React.FC<FolderNameHeaderProps> = ({ folderId, folderName, color, markState, onDeleted }) => {
  const colorHexCode = colorMap[color as keyof typeof colorMap];
  const { darkenColor } = useColorUtils();
  const darkenedColor = darkenColor(colorHexCode, 0.2);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const markFolderMutation = useFolderMark();

  const qc = useQueryClient();

  const { mutateAsync: deleteFolderAsync, isPending: isDeleting } = useMutation({
    mutationFn: (id: number) => deleteFolder(id),
  });

  const handleEditFolder = () => setIsEditModalOpen(false);

  const handleDeleteFolder = async () => {
    if (isDeleting) return;
    try {
      onDeleted?.();
      queueMicrotask(async () => {
        await deleteFolderAsync(folderId);
        qc.invalidateQueries({
          queryKey: FOLDER_QUERY_KEY.ALL(),
          exact: false,
        });
      });
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const handleToggleMark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!markFolderMutation.isPending) {
      markFolderMutation.mutate(folderId);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center w-full py-5">
        <button
          type="button"
          className="ml-3 mr-5 cursor-pointer"
          onClick={handleToggleMark}
          aria-label="즐겨찾기 토글"
        >
          {markState === "ACTIVE" ? <StarIcon /> : <EmptyStarIcon className="text-gray-400" />}
        </button>

        <ArchiveFolderIcon fillColor={colorHexCode} backgroundColor={darkenedColor} />

        <Text variant="sub_heading1" className="text-base-black ml-6 flex-1 min-w-0 break-words">
          {folderName}
        </Text>

        <div className="ml-2 w-6 h-6 flex items-center justify-center shrink-0">
          <Kebab
            withFolderMove
            onSelect={(value) => {
              if (value === "edit") setIsEditModalOpen(true);
              if (value === "delete") setIsDeleteModalOpen(true);
            }}
          />
        </div>
      </div>

      {isEditModalOpen && (
        <EditFolderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditFolder}
          folderName={folderName}
          folderColor={color as keyof typeof colorMap}
          folderId={folderId}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteFolderModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onSubmit={handleDeleteFolder}
          folderName={folderName}
          folderId={folderId}
        />
      )}
    </div>
  );
};

export default FolderNameHeader;
