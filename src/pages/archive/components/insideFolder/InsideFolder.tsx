import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { InnerFolderIcon } from "@svgs/index";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InsideFolderItemData from "src/mocks/InsideFolderItemData";
import { usePatchFolders } from "../../hooks/use-archive-folder";
import { DeleteFolderModal } from "../modal/DeleteFolderModal/DeleteFolderModal";
import { EditSubFolderModal } from "../modal/EditSubFolderModal/EditSubFolderModal";
import { Folder, MoveFolderModal } from "../modal/MoveFolderModal/MoveFolderModal";

interface InsideFolderProps {
  folderId: number;
  folderName: string;
  color: string;
  folders?: Folder[];
}

const InsideFolder: React.FC<InsideFolderProps> = ({ folderId, folderName, color }) => {
  const folders = InsideFolderItemData;

  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

  const { mutate: patchFolder } = usePatchFolders();
  const { id: parentId } = useParams();
  const parentFolderId = Number(parentId);

  const handleEditFolder = (newName: string) => {
    patchFolder({ folderId, body: { name: newName, color } }, { onSuccess: () => setIsEditModalOpen(false) });
  };

  const handleDeleteFolder = () => setIsDeleteModalOpen(false);
  const handleMoveFolder = () => setIsMoveModalOpen(false);

  const truncateText = (text?: string, maxLength = 10) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div
      className="w-[11.75rem] h-[3rem] pl-4 pr-2 py-2 rounded-lg border border-solid border-gray-150 flex items-center bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/archive/${parentFolderId}/${folderId}`}
        className="flex items-center gap-2 flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded-md"
        aria-label={`${folderName} 하위 폴더로 이동`}
        title={folderName}
      >
        <InnerFolderIcon className={`mr-2 fill-icon-${color}`} />
        <Text variant={isHovered ? "sub_heading2" : "sub_heading3"} className="w-[6rem] text-base-black truncate">
          {truncateText(folderName)}
        </Text>
      </Link>

      <Kebab
        onSelect={(value) => {
          if (value === "edit") setIsEditModalOpen(true);
          if (value === "delete") setIsDeleteModalOpen(true);
          if (value === "move") setIsMoveModalOpen(true);
        }}
        withFolderMove
      />

      {isEditModalOpen && (
        <EditSubFolderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditFolder}
          currentFolderName={folderName}
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
      {isMoveModalOpen && (
        <MoveFolderModal
          isOpen={isMoveModalOpen}
          onClose={() => setIsMoveModalOpen(false)}
          onSubmit={handleMoveFolder}
          currentFolderName={folderName}
          folders={folders}
        />
      )}
    </div>
  );
};

export default InsideFolder;
