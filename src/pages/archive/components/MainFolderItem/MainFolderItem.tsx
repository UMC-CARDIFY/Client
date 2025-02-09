import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { ArchiveNoteIcon, EmptyStarIcon, KebabIcon } from "@svgs/index";
import { StarIcon } from "../StarIcon";
import { ArchiveMainFolderIcon } from "./ArchiveMainFolderIcon";

type Color = keyof typeof colorMap;

interface MainFolderItemProps {
  id: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: Color;
  markState?: boolean;
}

const MainFolderItem: React.FC<MainFolderItemProps> = ({
  folderName,
  createdAt,
  noteCount,
  folderColor,
  markState,
}) => {
  const displayNoteCnt = noteCount > 99 ? "99+" : noteCount;

  return (
    <div className="flex flex-col relative w-[11.75rem] h-[11.75rem] p-6 pb-4 bg-white rounded-lg border border-gray-150">
      <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
        <ArchiveMainFolderIcon fillColor={colorMap[folderColor]} />

        {markState ? (
          <div className="absolute top-8 right-[0.37rem] w-4 h-4">
            <StarIcon />
          </div>
        ) : (
          <EmptyStarIcon className="absolute top-8 right-[0.37rem] w-4 h-4" />
        )}
      </div>

      <KebabIcon className="w-8 h-8 absolute top-6 right-4 cursor-pointer" />

      <div className="mt-4 w-[8.75rem] h-[2.25rem]">
        <Text
          variant="sub_heading2"
          className="text-base-black cursor-pointer overflow-hidden text-ellipsis line-clamp-2"
        >
          {folderName}
        </Text>
      </div>

      <div className="flex items-center justify-between text-gray-400 mt-[1.19rem]">
        <Text variant="sub_heading2" className="pr-8">
          {createdAt}
        </Text>
        <div className="flex gap-[0.19rem] items-center">
          <ArchiveNoteIcon className="w-4 h-4" />
          <Text variant="sub_heading2">{displayNoteCnt}</Text>
        </div>
      </div>
    </div>
  );
};

export default MainFolderItem;
