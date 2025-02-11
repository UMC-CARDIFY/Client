import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { useState } from "react";
import FolderItemData from "src/mocks/FolderItemData";
import MainFolderItem from "../MainFolderItem/MainFolderItem";
import NewFolderMain from "../newFolder/NewFolderMain";

type Color = keyof typeof colorMap;

interface MainFolderProps {
  id: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: Color;
  markState?: boolean;
}

interface MainFolderListProps {
  folders?: MainFolderProps[];
}

const ITEMS_PER_PAGE = 16; // 한 페이지당 표시할 폴더 개수

const MainFolderList: React.FC<MainFolderListProps> = ({ folders = FolderItemData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((folders.length + 1) / ITEMS_PER_PAGE);

  // 현재 페이지에 해당하는 폴더 목록 가져오기
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const adjustedItemsPerPage = currentPage === 1 ? ITEMS_PER_PAGE - 1 : ITEMS_PER_PAGE;
  const displayedFolders = folders.slice(startIndex, startIndex + adjustedItemsPerPage);

  if (displayedFolders.length === 0) {
    return (
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
        {/* 첫 페이지에만 NewFolderMain 추가 */}
        {currentPage === 1 && <NewFolderMain />}
        {displayedFolders.map((folder) => (
          <MainFolderItem
            key={folder.id}
            folderId={folder.id}
            folderName={folder.folderName}
            createdAt={folder.createdAt}
            noteCount={folder.noteCount}
            folderColor={folder.folderColor as Color}
            markState={folder.markState}
          />
        ))}
      </div>

      {folders.length > ITEMS_PER_PAGE - 1 && (
        <div className="mt-14 mb-[4.69rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
