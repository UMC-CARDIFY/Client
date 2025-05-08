import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import EmptyState from "@pages/home/components/EmptyState/EmptyState";
import { useState } from "react";
import FolderItemData from "src/mocks/FolderItemData";
import MainFolderItem from "../MainFolderItem/MainFolderItem";
import NewFolderMain from "../newFolder/NewFolderMain";

export interface MainFolderProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: string;
  markState?: boolean;
}

interface MainFolderListProps {
  folders?: MainFolderProps[];
  variant?: "home" | "archive";
  maxItems?: number;
}

const ITEMS_PER_PAGE = 16; // 한 페이지당 표시할 폴더 개수

const MainFolderList: React.FC<MainFolderListProps> = ({ folders = FolderItemData, variant = "archive", maxItems }) => {
  const isHome = variant === "home";

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = maxItems ? Math.min(folders.length, maxItems) : folders.length;
  const totalPages = Math.ceil((folders.length + 1) / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const adjustedItemsPerPage = currentPage === 1 ? ITEMS_PER_PAGE - 1 : ITEMS_PER_PAGE;
  const displayedFolders = folders.slice(startIndex, startIndex + adjustedItemsPerPage);

  if (folders.length === 0) {
    return isHome ? (
      <EmptyState type="favoriteFolder" />
    ) : (
      <div className="mt-12">
        <Text variant="sub_heading2" className="text-center">
          폴더가 없습니다.
        </Text>
      </div>
    );
  }
  return (
    <div className="w-[50rem]">
      <div className="gap-4 flex flex-wrap">
        {currentPage === 1 && <NewFolderMain />}
        {displayedFolders.map((folder) => (
          <MainFolderItem key={folder.folderId} {...folder} variant={variant} />
        ))}
      </div>

      {totalItems > ITEMS_PER_PAGE - 1 && (
        <div className="mt-14 mb-[4.69rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
