import { Text } from "@components/typography/Text";
import { DropdownIcon, InnerFolderIcon } from "@svgs/index";
import { useState } from "react";
import NoteList from "../note-list/note-list";

interface NoteListProps {
  color?: string;
  children: string;
  notes?: string[];
}

export default function FolderList({ color, children, notes = [] }: NoteListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        type="button"
        className="p-2 hover:bg-brand-50 group focus:bg-brand-100 rounded-[4px]"
        onClick={handleClick}
      >
        <div className="flex gap-2 items-center">
          {/* TODO 컬러 props */}
          <InnerFolderIcon />
          <Text
            variant="sub_heading4"
            className="text-base-black group-focus:text-brand-700  overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {children}
          </Text>
          <DropdownIcon className={`m-1 ml-auto transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      {isOpen && notes?.length > 0 && (
        <div className="mt-1 ml-6 flex flex-col gap-1">
          {notes.map((note, idx) => (
            <NoteList key={idx}>{note}</NoteList>
          ))}
        </div>
      )}
    </>
  );
}
