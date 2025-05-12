import Kebab from "@components/common/dropdown/Kebab";
import { Text } from "@components/typography/Text";
import { useFolderMark } from "@pages/archive/hooks/use-folder";
import { ArchiveNoteIcon, EmptyStarIcon } from "@svgs/index";
import { getSafeColor } from "@utils/color";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "../StarIcon";
import { DeleteFolderModal } from "../modal/DeleteFolderModal/DeleteFolderModal";
import { EditFolderModal } from "../modal/EditFolderModal/EditFolderModal";
import { ArchiveMainFolderIcon } from "./ArchiveMainFolderIcon";

interface MainFolderItemProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: string;
  markState?: boolean;
  variant?: "home" | "archive";
}

const MainFolderItem: React.FC<MainFolderItemProps> = ({
  folderId,
  folderName,
  createdAt,
  noteCount,
  folderColor,
  markState,
  variant = "archive",
}) => {
  const navigate = useNavigate();
  const displayNoteCnt = noteCount > 99 ? "99+" : noteCount;
  const isArchive = variant === "archive";

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const markFolderMutation = useFolderMark();

  const handleEditFolder = () => setIsEditModalOpen(false);
  const handleDeleteFolder = () => setIsDeleteModalOpen(false);

  const handleToggleMark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!markFolderMutation.isPending) {
      markFolderMutation.mutate(folderId);
    }
  };

  const handleClickFolder = () => {
    navigate(`/folder/${folderId}`);
  };

  const fillColor = getSafeColor(folderColor);

  return (
    <div
      onClick={handleClickFolder}
      className="flex flex-col relative w-[11.75rem] h-[11.75rem] p-6 pb-4 bg-white rounded-lg border border-gray-150 hover:bg-brand-20 cursor-pointer"
    >
      <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
        <ArchiveMainFolderIcon fillColor={fillColor} />

        <button className="absolute top-8 right-[0.37rem] w-4 h-4 cursor-pointer" onClick={handleToggleMark}>
          {markState ? <StarIcon /> : <EmptyStarIcon />}
        </button>
      </div>

      {isArchive && (
        <div className="absolute top-6 right-4 cursor-pointer z-10" onClick={(e) => e.stopPropagation()}>
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

      {isEditModalOpen && (
        <EditFolderModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditFolder}
          folderName={folderName}
          folderColor={folderColor}
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

export default MainFolderItem;
