import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxFilledIcon, CheckboxIcon, EmptyStarIcon, FlashcardIcon } from "@svgs/index";
import type { NoteItem as NoteItemType } from "@typedefs";
import { useNoteMark } from "../../hooks/use-archive-note";
import { StarIcon } from "../StarIcon";

interface NoteItemProps extends NoteItemType {
  isChecked: boolean;
  onToggleCheck: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  noteId,
  name,
  createdAt,
  editDate,
  flashCardCount,
  folderColor,
  markState,
  isChecked,
  onToggleCheck,
}) => {
  const displayFlashcardNum = flashCardCount > 99 ? "99+" : flashCardCount;
  const { mutate } = useNoteMark();

  const handleToggleMark = () => {
    mutate({ noteId, isMark: markState === "INACTIVE" });
  };

  return (
    <div className="flex py-[0.5rem] items-center ml-[0.5rem]">
      {/* 즐겨찾기 */}
      <button className="mr-[1.6rem] cursor-pointer" onClick={handleToggleMark}>
        {markState === "ACTIVE" ? <StarIcon /> : <EmptyStarIcon className="text-gray-400" />}
      </button>

      {/* 체크박스 */}
      <button onClick={onToggleCheck} className="mr-[1.38rem] cursor-pointer">
        {isChecked ? <CheckboxFilledIcon /> : <CheckboxIcon />}
      </button>

      <ArchiveNoteIcon className={`w-[1.75rem] h-[1.75rem] mr-[1.5rem] fill-icon-${folderColor}`} />
      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />

      <Text variant="sub_heading2" className="flex-grow pl-[1rem] pr-[1.25rem] text-base-black cursor-pointer">
        {name}
      </Text>

      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.25rem]">
        {createdAt}
      </Text>

      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.25rem]">
        {editDate}
      </Text>

      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <div className="w-[6.75rem]">
        <div className="inline-flex px-[0.75rem] py-[0.38rem] gap-[0.5rem] rounded-lg bg-gray-100 ml-[1rem]">
          <FlashcardIcon />
          <Text variant="sub_heading3" className="text-gray-500">
            {displayFlashcardNum}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
