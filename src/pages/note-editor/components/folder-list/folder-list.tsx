import { Text } from "@components/typography/Text";
import { InnerFolderIcon } from "@svgs/index";
import { useState } from "react";
interface NoteListProps {
  color?: string;
  children: string;
}

export default function FolderList({ color, children }: NoteListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button type="button" className="p-2 hover:bg-gray-50 focus:bg-gray-100 rounded-[4px]" onClick={handleClick}>
        <div className="flex gap-2 items-center">
          {/* TODO 컬러 props */}
          <InnerFolderIcon />
          <Text variant="sub_heading4" className="text-base-black overflow-hidden text-ellipsis whitespace-nowrap">
            {children}
          </Text>
        </div>
      </button>
    </>
  );
}
