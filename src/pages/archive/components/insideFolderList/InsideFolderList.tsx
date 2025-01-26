import { Text } from "@components/typography/Text";
import React from "react";
import InsideFolder from "../insideFolder/InsideFolder";
import NewFolder from "../newFolder/NewFolder";

interface FolderData {
  id: number;
  folderName: string;
  color: string;
}

interface InsideFolderListProps {
  folders?: FolderData[];
}

const InsideFolderList: React.FC<InsideFolderListProps> = ({ folders = defaultFolders }) => {
  if (folders.length === 0) {
    return <div>empty</div>;
  }
  const displayedFolders = folders.slice(0, 7);
  const shouldShowViewAll = folders.length > 7;

  return (
    <div className="w-[50rem] flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        <NewFolder />
        {displayedFolders.map((folder) => (
          <InsideFolder key={folder.id} folderName={folder.folderName} color={folder.color} />
        ))}
      </div>
      {shouldShowViewAll && (
        <Text
          variant="sub_heading2"
          className="text-gray-500 mt-3 mr-2 px-2 py-1 self-end hover:bg-gray-50 rounded cursor-pointer"
        >
          전체보기
        </Text>
      )}
    </div>
  );
};

const defaultFolders: FolderData[] = [
  { id: 1, folderName: "1강 빈칸 채우기", color: "sage" },
  { id: 2, folderName: "2강 빈칸 채우기", color: "sage" },
  { id: 3, folderName: "3강 빈칸 채우기", color: "sage" },
  { id: 4, folderName: "4강 빈칸 채우기", color: "sage" },
  { id: 5, folderName: "5강 빈칸 채우기", color: "sage" },
  { id: 6, folderName: "6강 빈칸 채우기", color: "sage" },
  { id: 7, folderName: "긴폴더이름긴폴더이름", color: "sage" },
  { id: 8, folderName: "8강 빈칸 채우기", color: "sage" },
];

export default InsideFolderList;
