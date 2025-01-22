import { Text } from "@components/typography/Text";
import { AddMainFolderIcon } from "@svgs/index";
import FolderItemData from "src/mocks/FolderItemData";
import MainFolderItem from "../MainFolderItem/MainFolderItem";

interface MainFolderProps {
  title: string;
  createdDate: string;
  noteCnt: number;
  color: string;
  isStarred?: boolean;
}

interface MainFolderListProps {
  folders?: MainFolderProps[];
}

const MainFolderList: React.FC<MainFolderListProps> = ({ folders = FolderItemData }) => {
  return (
    <div className="w-[50rem]">
      {folders.length === 0 ? (
        <div className="mt-12">
          <Text variant="sub_heading2" className="text-center">
            폴더가 없습니다.
          </Text>
        </div>
      ) : (
        <div className="gap-4 flex flex-wrap">
          <AddMainFolderIcon className="cursor-pointer" />
          {folders.map((folder) => (
            <MainFolderItem
              key={folder.title}
              title={folder.title}
              createdDate={folder.createdDate}
              noteCnt={folder.noteCnt}
              color={folder.color}
              isStarred={folder.isStarred}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
