import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { InnerFolderIcon, KebabIcon } from "@svgs/index";
import React, { useState } from "react";
import { DeleteFolderModal } from "../modal/DeleteFolderModal/DeleteFolderModal";
import { EditSubFolderModal } from "../modal/EditSubFolderModal/EditSubFolderModal";
import { MoveFolderModal } from "../modal/MoveFolderModal/MoveFolderModal";

interface InsideFolderProps {
  folderName: string;
  color: string;
}

const InsideFolder: React.FC<InsideFolderProps> = ({ folderName, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

  const handleEditFolder = () => {
    setIsEditModalOpen(false); // 모달 닫기
  };

  const handleDeleteFolder = () => {
    setIsDeleteModalOpen(false);
  };
  const handleMoveFolder = () => {
    setIsMoveModalOpen(false);
  };

  const truncateText = (text: string, maxLength = 10) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div>
      <div
        className={`w-[11.75rem] h-[3rem] py-2 pl-4 pr-2 rounded-lg border border-solid
         border-gray-150 flex flex-row items-center cursor-pointer
         ${isHovered ? "bg-gray-50" : "bg-white"} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InnerFolderIcon className={`fill-icon-${color} mr-2`} />
        <Text variant={isHovered ? "sub_heading2" : "sub_heading3"} className="w-[6rem] text-base-black truncate">
          {truncateText(folderName)}
        </Text>
        <Kebab
          onSelect={(value) => {
            if (value === "edit") {
              setIsEditModalOpen(true);
            }
            if (value === "delete") {
              setIsDeleteModalOpen(true);
            }
            if (value === "move") {
              setIsMoveModalOpen(true);
            }
          }}
          withFolderMove
        />
      </div>

      {/* Folder Modal */}
      <EditSubFolderModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditFolder}
        currentFolderName={folderName}
      />
      <DeleteFolderModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onSubmit={handleDeleteFolder}
        folderName={folderName}
      />
      <MoveFolderModal
        isOpen={isMoveModalOpen}
        onClose={() => setIsMoveModalOpen(false)}
        onSubmit={handleMoveFolder}
        currentFolderName={folderName}
        folders={folders ?? []}
      />
    </div>
  );
};

export default InsideFolder;

// 예제 데이터
const folders = [
  { id: "1", name: "1강", color: "#77CEC6", isStarred: true, itemCount: 5 },
  { id: "2", name: "2강", color: "#AECA99", isStarred: false, itemCount: 3 },
  { id: "3", name: "3강", color: "#D49AE9", isStarred: true, itemCount: 8 },
];
