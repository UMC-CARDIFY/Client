import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxIcon, FlashcardIcon, StarIcon } from "@svgs/index";

interface NoteItemProps {
  title: string;
  createdDate: string;
  modifiedDate: string;
  flashcardNum: number;
}

const NoteItem: React.FC<NoteItemProps> = ({ title, createdDate, modifiedDate, flashcardNum }) => {
  return (
    <div className="flex py-[0.5rem] items-center ml-[0.5rem]">
      <StarIcon className="mr-[0.5rem]" />
      <CheckboxIcon className="mr-[1.38rem]" />
      <ArchiveNoteIcon className="w-[1.75rem] h-[1.75rem] mr-[1.5rem]" />
      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <Text variant="sub_heading2" className="flex-grow pl-[1rem] pr-[1.25rem] text-black">
        {title}
      </Text>
      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.25rem]">
        {createdDate}
      </Text>
      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.25rem]">
        {modifiedDate}
      </Text>
      <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
      <div className="w-[6.75rem]">
        <div className="inline-flex px-[0.75rem] py-[0.38rem] gap-[0.5rem] rounded-lg bg-gray-100 ml-[1rem]">
          <FlashcardIcon />
          <Text variant="sub_heading3" className="text-gray-500">
            {flashcardNum}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
