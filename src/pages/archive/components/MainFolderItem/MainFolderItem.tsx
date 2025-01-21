import { Text } from "@components/typography/Text";
import { useColorUtils } from "@pages/archive/hooks/useColorUtils";
import { colorMap } from "@styles/colorMap";
import { ArchiveNoteIcon, StarIcon } from "@svgs/index";
import { ArchiveFolderIcon } from "../ArchiveFolderIcon";

interface MainFolderItemProps {
  title: string;
  createdDate: string;
  noteCnt: number;
  color: string;
  isStarred?: boolean;
}

const MainFolderItem: React.FC<MainFolderItemProps> = ({ title, createdDate, noteCnt, color, isStarred }) => {
  const displayNoteCnt = noteCnt > 99 ? "99+" : noteCnt;
  const { darkenColor } = useColorUtils();

  return (
    <div className="flex flex-col relative w-[11.75rem] h-[11.75rem] p-6 pb-4 bg-white rounded-lg border border-gray-150">
      <div className="relative w-[3.75rem] h-[3.75rem]">
        <ArchiveFolderIcon
          fillColor={colorMap[color]}
          backgroundColor={darkenColor(colorMap[color], 0.2)}
          width={60}
          height={60}
        />
        {isStarred && <StarIcon className="absolute top-8 right-[0.37rem] w-5 h-5" />}
      </div>

      <Text variant="sub_heading2" className="mt-4 w-[8.75rem] h-[2.25rem] flex-grow text-base-black cursor-pointer">
        {title}
      </Text>

      <div className="flex items-center justify-between text-gray-400 mt-[1.19rem]">
        <Text variant="sub_heading2" className="pr-8">
          {createdDate}
        </Text>
        <div className="flex items-center gap-[0.19rem]">
          <ArchiveNoteIcon className="w-4 h-4" />
          <Text variant="sub_heading2">{displayNoteCnt}</Text>
        </div>
      </div>
    </div>
  );
};

export default MainFolderItem;
