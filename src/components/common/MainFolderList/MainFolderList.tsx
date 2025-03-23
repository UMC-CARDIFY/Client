import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import NewFolderMain from "@pages/archive/components/newFolder/NewFolderMain";
import EmptyState from "@pages/home/components/EmptyState/EmptyState";
import { colorMap } from "@styles/colorMap";
import { useState } from "react";
import MainFolderItem from "./MainFolderItem";

type Color = keyof typeof colorMap;

export interface MainFolderProps {
  id: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: Color;
  markState?: boolean;
}

interface MainFolderListProps {
  folders?: MainFolderProps[];
  variant?: "home" | "archive" | "search";
  maxItems?: number;
  containerClassName?: string; // 확장 가능
  keyword?: string;
}

const ITEMS_PER_PAGE = 16;

const MainFolderList: React.FC<MainFolderListProps> = ({
  folders = [],
  variant = "archive",
  maxItems,
  containerClassName = "w-full", // 기본값
  keyword,
}) => {
  const isHome = variant === "home";
  const isArchive = variant === "archive";
  const showNewFolder = isArchive;

  const [currentPage, setCurrentPage] = useState(1);
  const paginated = !maxItems;

  const displayedFolders = maxItems
    ? folders.slice(0, maxItems)
    : folders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const totalPages = paginated ? Math.ceil(folders.length / ITEMS_PER_PAGE) : 1;

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
    <div className={containerClassName}>
      <div className="gap-4 flex flex-wrap">
        {showNewFolder && currentPage === 1 && <NewFolderMain />}
        {displayedFolders.map((folder) => (
          <MainFolderItem key={folder.id} {...folder} variant={variant} keyword={keyword} />
        ))}
      </div>

      {paginated && totalPages > 1 && (
        <div className="mt-14 mb-[4.69rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
