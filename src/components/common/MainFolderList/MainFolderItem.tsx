import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { StarIcon } from "@pages/archive/components/StarIcon";
import { DeleteFolderModal } from "@pages/archive/components/modal/DeleteFolderModal/DeleteFolderModal";
import { EditFolderModal } from "@pages/archive/components/modal/EditFolderModal/EditFolderModal";
import { colorMap } from "@styles/colorMap";
import { ArchiveNoteIcon, EmptyStarIcon } from "@svgs/index";
import { useState } from "react";
import { ArchiveMainFolderIcon } from "./ArchiveMainFolderIcon";

type Color = keyof typeof colorMap;

export interface MainFolderItemProps {
  id: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: Color;
  markState?: boolean;
  variant?: "home" | "archive" | "search";
}

const MainFolderItem: React.FC<MainFolderItemProps> = ({
  folderName,
  createdAt,
  noteCount,
  folderColor,
  markState,
  variant = "archive",
}) => {
  const isArchive = variant === "archive";
  const displayNoteCnt = noteCount > 99 ? "99+" : noteCount;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditFolder = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteFolder = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="flex flex-col relative w-[11.75rem] h-[11.75rem] p-6 pb-4 bg-white rounded-lg border border-gray-150 hover:bg-brand-20 cursor-pointer">
      <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
        <ArchiveMainFolderIcon fillColor={colorMap[folderColor]} />

        {markState ? (
          <div className="absolute top-8 right-[0.37rem] w-4 h-4">
            <StarIcon />
          </div>
        ) : (
          <EmptyStarIcon className="absolute top-8 right-[0.37rem] w-4 h-4" />
        )}
      </div>

      {/* 케밥 메뉴는 archive에서만 노출 */}
      {isArchive && (
        <div className="absolute top-6 right-4 cursor-pointer z-10">
          <Kebab
            onSelect={(value) => {
              if (value === "edit") setIsEditModalOpen(true);
              if (value === "delete") setIsDeleteModalOpen(true);
            }}
          />
        </div>
      )}

      <div className="mt-4 w-[8.75rem] h-[2.25rem]">
        <Text variant="sub_heading2" className="text-base-black text-ellipsis line-clamp-2 leading-tight">
          {folderName}
        </Text>
      </div>

      <div className="flex items-center justify-between text-gray-400 mt-auto">
        <Text variant="sub_heading2" className="pr-8">
          {createdAt}
        </Text>
        <div className="flex gap-[0.19rem] items-center">
          <ArchiveNoteIcon className="w-4 h-4 fill-gray-400" />
          <Text variant="sub_heading2">{displayNoteCnt}</Text>
        </div>
      </div>

      {/* 모달도 archive에서만 */}
      {isArchive && isEditModalOpen && (
        <EditFolderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditFolder}
          folderName={folderName}
          folderColor={folderColor}
        />
      )}
      {isArchive && isDeleteModalOpen && (
        <DeleteFolderModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onSubmit={handleDeleteFolder}
          folderName={folderName}
        />
      )}
    </div>
  );
};

export default MainFolderItem;
