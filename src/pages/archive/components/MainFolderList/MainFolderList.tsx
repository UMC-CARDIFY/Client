import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import FolderItemData from "@mocks/folder-item-data";
import EmptyState from "@pages/home/components/EmptyState/EmptyState";
import { useState } from "react";
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
  onLimitReached?: () => void;
}

const ITEMS_PER_PAGE = 16;
const FIRST_PAGE_CAP = ITEMS_PER_PAGE - 1;
const OTHER_PAGE_CAP = ITEMS_PER_PAGE;

const MainFolderList: React.FC<MainFolderListProps> = ({
  folders = FolderItemData,
  variant = "archive",
  maxItems,
  onLimitReached,
}) => {
  const isHome = variant === "home";
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = maxItems ? Math.min(folders.length, maxItems) : folders.length;

  const totalPages = totalItems <= FIRST_PAGE_CAP ? 1 : 1 + Math.ceil((totalItems - FIRST_PAGE_CAP) / OTHER_PAGE_CAP);

  const pageCapacity = currentPage === 1 ? FIRST_PAGE_CAP : OTHER_PAGE_CAP;
  const startIndex = currentPage === 1 ? 0 : FIRST_PAGE_CAP + (currentPage - 2) * OTHER_PAGE_CAP;

  const displayedFolders = folders.slice(startIndex, Math.min(startIndex + pageCapacity, totalItems));

  if (totalItems === 0) {
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
        {currentPage === 1 && <NewFolderMain onLimitReached={onLimitReached} />}

        {displayedFolders.map((folder) => (
          <MainFolderItem key={folder.folderId} {...folder} variant={variant} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-14 mb-[4.69rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
