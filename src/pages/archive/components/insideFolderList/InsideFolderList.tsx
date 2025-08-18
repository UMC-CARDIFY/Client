import { Text } from "@components/typography/Text";
import React, { useState } from "react";
import { usePostSubFolder } from "../../hooks/use-archive-folder";
import InsideFolder from "../insideFolder/InsideFolder";
import { AddSubFolderModal } from "../modal/AddSubFolderModal/AddSubFolderModal";
import NewFolder from "../newFolder/NewFolder";

interface FolderData {
  folderId: number;
  folderName: string;
  color: string;
}

interface InsideFolderListProps {
  folders: FolderData[];
  parentFolderId: number;
}

const InsideFolderList: React.FC<InsideFolderListProps> = ({ folders, parentFolderId }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { mutate: createSubFolder } = usePostSubFolder(parentFolderId);

  const handleAddFolderClick = () => setIsAddModalOpen(true);
  const handleModalClose = () => setIsAddModalOpen(false);
  const handleModalSubmit = (folderName: string) => {
    if (!folderName.trim()) return;
    createSubFolder({ name: folderName });
    setIsAddModalOpen(false);
  };

  const validFolders = folders.filter(
    (folder) =>
      typeof folder.folderName === "string" &&
      folder.folderName.trim() !== "" &&
      typeof folder.color === "string" &&
      folder.color.trim() !== "",
  );

  const displayedFolders = validFolders.slice(0, 7);
  const shouldShowViewAll = validFolders.length > 7;

  return (
    <div className="w-[50rem] flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        <NewFolder onClick={handleAddFolderClick} />

        {displayedFolders.map((folder) => (
          <InsideFolder
            key={folder.folderId}
            folderId={folder.folderId}
            folderName={folder.folderName}
            color={folder.color}
          />
        ))}
      </div>

      <AddSubFolderModal isOpen={isAddModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />

      {shouldShowViewAll && (
        <Text
          variant="sub_heading4"
          className="text-gray-500 mt-3 px-2 py-1 self-end hover:bg-gray-50 rounded cursor-pointer"
        >
          전체 보기
        </Text>
      )}
    </div>
  );
};

export default InsideFolderList;
