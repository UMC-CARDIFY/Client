import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { useFolderMark } from "@hooks/folder/use-folder";
import { useColorUtils } from "@pages/archive/hooks/useColorUtils";
import { colorMap } from "@styles/colorMap";
import { EmptyStarIcon, StarIcon } from "@svgs/index";
import React from "react";
import { useState } from "react";
import { ArchiveFolderIcon } from "../ArchiveFolderIcon";
import { DeleteFolderModal } from "../modal/DeleteFolderModal/DeleteFolderModal";
import { EditFolderModal } from "../modal/EditFolderModal/EditFolderModal";

interface FolderNameHeaderProps {
  folderId: number;
  folderName: string;
  color: string;
  markState: boolean;
}

const FolderNameHeader: React.FC<FolderNameHeaderProps> = ({
  folderId,
  folderName,
  color,
  markState,
}) => {
  const colorHexCode = colorMap[color as keyof typeof colorMap];
  const { darkenColor } = useColorUtils();
  const darkenedColor = darkenColor(colorHexCode, 0.2);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const markFolderMutation = useFolderMark();

  const handleEditFolder = () => {
    setIsEditModalOpen(false);
  };
  const handleDeleteFolder = () => {
    setIsDeleteModalOpen(false);
  };

  const handleToggleMark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!markFolderMutation.isPending) {
      markFolderMutation.mutate(folderId);
    }
  };

  return (
    <div className="flex flex-row items-center h-[4rem] relative w-full">
      <button className="cursor-pointer mr-2" onClick={handleToggleMark}>
        {markState ? <StarIcon /> : <EmptyStarIcon />}
      </button>
      <ArchiveFolderIcon
        fillColor={colorHexCode}
        backgroundColor={darkenedColor}
      />
      <Text variant="heading2" className="text-base-black ml-4">
        {folderName}
      </Text>
      <div className="flex items-center absolute right-0">
        <Kebab
          onSelect={(value) => {
            if (value === "edit") {
              setIsEditModalOpen(true);
            }
            if (value === "delete") {
              setIsDeleteModalOpen(true);
            }
          }}
        />
      </div>

      {isEditModalOpen && (
        <EditFolderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditFolder}
          folderName={folderName}
          folderColor={color as keyof typeof colorMap}
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
