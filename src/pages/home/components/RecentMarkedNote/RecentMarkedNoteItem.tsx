import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, FlashcardIcon, StarIcon } from "@svgs/index";
import React from "react";
import { NoteItemProps } from "../../../../types/note";
import { highlightKeyword } from "@utils/highlightKeyword";

interface Props extends NoteItemProps {
  keyword?: string;
}

const RecentMarkedNoteItem: React.FC<NoteItemProps> = ({ name, content, folderColor, editDate, flashCardCount, keyword }) => {
  const displayFlashcardNum = flashCardCount > 99 ? "99+" : flashCardCount;
  return (
    <div className="w-[15.8125rem] h-[17.5rem] shrink-0 px-5 flex flex-col pb-4 border border-solid border-gray-150 rounded-lg cursor-pointer hover:bg-brand-20">
      <div className="pr-1 pt-5 mb-3 flex flex-row items-center">
        <StarIcon className="cursor-pointer" />
        <ArchiveNoteIcon className={`mr-2 fill-${folderColor}-600`} />
        <Text variant={"sub_heading1"} className="w-[9.8125rem] text-base-black truncate">
        {keyword ? highlightKeyword(name, keyword) : name}
        </Text>
      </div>
      <hr />
      <div className="flex flex-col flex-1">
        <Text variant={"body3"} className="mt-3 px-3 h-40 text-gray-500 line-clamp-6 whitespace-normal ">
          {keyword ? highlightKeyword(content, keyword) : content}
        </Text>

        <div className=" flex flex-row justify-between px-1 mt-auto text-gray-350">
          <Text variant={"caption"}>{editDate}</Text>
          <div className="flex flex-row gap-2">
            <FlashcardIcon />
            <Text variant={"sub_heading3"}>{displayFlashcardNum}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentMarkedNoteItem;
