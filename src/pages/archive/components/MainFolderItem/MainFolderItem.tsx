import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { ArchiveNoteIcon, EmptyStarIcon, KebabIcon } from "@svgs/index";
import { StarIcon } from "../StarIcon";
import { ArchiveMainFolderIcon } from "./ArchiveMainFolderIcon";

interface MainFolderItemProps {
  title: string;
  createdDate: string;
  noteCnt: number;
  color: string;
  isStarred?: boolean;
}

const MainFolderItem: React.FC<MainFolderItemProps> = ({ title, createdDate, noteCnt, color, isStarred }) => {
  const displayNoteCnt = noteCnt > 99 ? "99+" : noteCnt;

  return (
    <div className="flex flex-col relative w-[11.75rem] h-[11.75rem] p-6 pb-4 bg-white rounded-lg border border-gray-150">
      <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
        <ArchiveMainFolderIcon fillColor={colorMap[color]} />

        {isStarred ? (
          <div className="absolute top-8 right-[0.37rem] w-4 h-4">
            <StarIcon />
          </div>
        ) : (
          <EmptyStarIcon className="absolute top-8 right-[0.37rem] w-4 h-4" />
        )}
      </div>

      <KebabIcon className="w-8 h-8 absolute top-6 right-4 cursor-pointer" />

      <Text
        variant="sub_heading2"
        className="mt-4 w-[8.75rem] text-base-black cursor-pointer overflow-hidden text-ellipsis line-clamp-2 font-pretendard text-[0.875rem] font-medium leading-[18px] h-[2.25rem]"
      >
        {title}
      </Text>

      <div className="flex items-center justify-between text-gray-400 mt-[1.19rem]">
        <Text variant="sub_heading2" className="pr-8 leading-none">
          {createdDate}
        </Text>
        <div className="flex gap-[0.19rem]">
          <ArchiveNoteIcon className="w-4 h-4" />
          <Text variant="sub_heading2" className="leading-none">
            {displayNoteCnt}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MainFolderItem;
