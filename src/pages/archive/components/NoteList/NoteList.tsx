import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxIcon } from "@svgs/index";
import NoteItem from "../NoteItem/NoteItem";

const NoteList = () => {
  return (
    <div className="w-[50rem]">
      <div className="flex items-center py-[0.75rem] pl-[3rem] pr-[2rem]">
        <CheckboxIcon className="mr-[1.5rem]" />
        <ArchiveNoteIcon className="mr-[1.62rem]" />
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="ml-[1rem] flex-grow text-gray-500">
          노트 이름
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.9rem]">
          노트 생성일
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.9rem]">
          최근 수정일
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1.06rem]">
          플래시 카드
        </Text>
      </div>
      <div className="bg-gray-150 h-[1px] w-full my-[0.5rem]" />
      <NoteItem
        title="1차에서 5차까지 오답 노트 총정리"
        createdDate="2024-08-20"
        modifiedDate="2024-08-20"
        flashcardNum={120}
      />
    </div>
  );
};

export default NoteList;
