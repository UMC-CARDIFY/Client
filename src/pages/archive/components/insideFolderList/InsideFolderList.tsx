import { Text } from "@components/typography/Text";
import React from "react";
import InsideFolder from "../insideFolder/InsideFolder";
import NewFolder from "../newFolder/NewFolder";

interface FolderData {
  folderId: number;
  name: string;
  color: string;
}

interface InsideFolderListProps {
  folders?: FolderData[];
}

const InsideFolderList: React.FC<InsideFolderListProps> = ({ folders = [] }) => {
  const displayedFolders = folders.slice(0, 7);
  const shouldShowViewAll = folders.length > 7;

  return (
    <div className="w-[50rem] flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        <NewFolder />
        {displayedFolders.map((folder) => (
          <InsideFolder key={folder.folderId} folderId={folder.folderId} name={folder.name} color={folder.color} />
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

export default InsideFolderList;
