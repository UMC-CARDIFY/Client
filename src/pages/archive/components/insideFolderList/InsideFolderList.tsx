import { Text } from "@components/typography/Text";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostSubFolder } from "../../hooks/use-archive-folder";
import InsideFolder from "../insideFolder/InsideFolder";
import { AddSubFolderModal } from "../modal/AddSubFolderModal/AddSubFolderModal";
import NewFolder from "../new-folder/NewFolder";

interface FolderData {
  folderId: number;
  folderName: string;
  color: string;
}

interface InsideFolderListProps {
  folders: FolderData[];
  parentFolderId: number;
  isAllFoldersView?: boolean;
}

const InsideFolderList: React.FC<InsideFolderListProps> = ({ folders, parentFolderId, isAllFoldersView = false }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const { mutate: createSubFolder } = usePostSubFolder(parentFolderId);

  const handleAddFolderClick = () => setIsAddModalOpen(true);
  const handleModalClose = () => setIsAddModalOpen(false);
  const handleModalSubmit = (folderName: string) => {
    if (!folderName.trim()) return;
    createSubFolder({ name: folderName });
    setIsAddModalOpen(false);
  };

  const handleViewAllClick = () => {
    navigate(`/archive/${parentFolderId}/all`);
  };

  const validFolders = folders.filter(
    (folder) =>
      typeof folder.folderName === "string" &&
      folder.folderName.trim() !== "" &&
      typeof folder.color === "string" &&
      folder.color.trim() !== "",
  );

  // 표시 갯수
  const displayedFolders = isAllFoldersView ? validFolders : validFolders.slice(0, 7);
  const shouldShowViewAll = !isAllFoldersView && validFolders.length > 7;

  // 모드별 그리드/아이템 폭
  const gridColsClass = isAllFoldersView
    ? "grid grid-cols-[repeat(2,392px)] justify-between" // 2열 × 392px
    : "grid grid-cols-[repeat(4,188px)] justify-between"; // 4열 × 188px

  const itemWidthClass = isAllFoldersView ? "w-[392px]" : "w-[188px]";

  return (
    <div className="w-[50rem] flex flex-col">
      <div className={`gap-4 ${gridColsClass}`}>
        <div className={itemWidthClass}>
          <NewFolder onClick={handleAddFolderClick} />
        </div>

        {displayedFolders.map((folder) => (
          <InsideFolder
            key={folder.folderId}
            folderId={folder.folderId}
            folderName={folder.folderName}
            color={folder.color}
            className={itemWidthClass}
          />
        ))}
      </div>

      <AddSubFolderModal isOpen={isAddModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />

      {shouldShowViewAll && (
        <Text
          variant="sub_heading4"
          className="text-gray-500 mt-3 px-2 py-1 self-end hover:bg-gray-50 rounded cursor-pointer"
          onClick={handleViewAllClick}
        >
          전체 보기
        </Text>
      )}
    </div>
  );
};

export default InsideFolderList;
