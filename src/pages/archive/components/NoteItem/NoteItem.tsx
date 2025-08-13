import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxFilledIcon, CheckboxIcon, EmptyStarIcon, FlashcardIcon } from "@svgs/index";
import type { NoteItem as NoteItemType } from "@typedefs";
import { truncate } from "@utils/truncate";
import { useNoteMark } from "../../hooks/use-archive-note";
import { StarIcon } from "../StarIcon";
interface NoteItemProps extends NoteItemType {
  isChecked: boolean;
  onToggleCheck: () => void;
}

const GRID = "grid grid-cols-[16px_16px_16px_22px_28px_1fr_110px_110px_110px] items-center";
const SEP = "flex items-center before:content-[''] before:block before:w-px before:h-6 before:bg-gray-150";

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
  const displayFlashcardNum = flashCardCount > 99 ? "99+" : String(flashCardCount);
  const { mutate } = useNoteMark();

  const handleToggleMark = () => {
    mutate({ noteId, isMark: markState === "INACTIVE" });
  };

  return (
    <div className={`${GRID} pl-4 py-2`}>
      <button
        className="w-4 h-4 inline-flex items-center justify-center justify-self-start"
        onClick={handleToggleMark}
        aria-label="즐겨찾기 토글"
      >
        {markState === "ACTIVE" ? <StarIcon /> : <EmptyStarIcon className="text-gray-400" />}
      </button>

      <div />

      <button
        onClick={onToggleCheck}
        className="w-4 h-4 inline-flex items-center justify-center cursor-pointer"
        aria-label="노트 선택"
      >
        {isChecked ? <CheckboxFilledIcon className="w-4 h-4" /> : <CheckboxIcon className="w-4 h-4" />}
      </button>

      <div />

      <ArchiveNoteIcon className={`w-7 h-7 fill-icon-${folderColor}`} />

      <div className={`${SEP} before:ml-[26px] before:mr-4 min-w-0`}>
        <Text variant="sub_heading2" className="text-base-black">
          {truncate(name ?? "", 25)}
        </Text>
      </div>

      <div className={`${SEP} before:mr-4`}>
        <Text variant="sub_heading3" className="text-gray-500">
          {createdAt}
        </Text>
      </div>

      <div className={`${SEP} before:mr-4`}>
        <Text variant="sub_heading3" className="text-gray-500">
          {editDate}
        </Text>
      </div>

      <div className={`${SEP} before:mr-4`}>
        <div className="inline-flex px-3 py-1.5 gap-2 rounded-lg bg-gray-100">
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
