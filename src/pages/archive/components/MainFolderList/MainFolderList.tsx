import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
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
  variant?: "home" | "archive";
  maxItems?: number;
}

const MainFolderList: React.FC<MainFolderListProps> = ({ folders = FolderItemData, variant = "archive", maxItems }) => {
  const displayFolders = maxItems ? folders.slice(0, maxItems) : folders;
  const isHome = variant === "home";

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
          {!isHome && <NewFolderMain />}
          {displayFolders.map((folder) => (
            <MainFolderItem key={folder.id} {...folder} variant={variant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainFolderList;
