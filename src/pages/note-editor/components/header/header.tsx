import Button from "@components/common/button/button";
import { PATHS } from "@routes/paths";
import { EmptyStarIcon, HalfDoubleArrowBoldIcon, KebabIcon, LinkIcon, StarIcon } from "@svgs/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteButton from "../button/button";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  onOpenSidebar: () => void;
}

const Header = ({ isSidebarCollapsed, onOpenSidebar }: HeaderProps) => {
  const route = useNavigate();
  const [isMark, setIsMark] = useState(false);

  const handleMark = () => {
    setIsMark(!isMark);
  };

  const handleClick = () => {
    route(PATHS.ARCHIVE);
  };
  return (
    <header className="py-5 px-8 bg-white border min-w-[68rem] flex justify-between">
      <div className="flex gap-4">
        {!isSidebarCollapsed && (
          <Button variant="SIZE" size="XL" onClick={onOpenSidebar}>
            <HalfDoubleArrowBoldIcon className="text-gray-400 rotate-180" />
          </Button>
        )}
        <NoteButton className="px-5" onClick={handleClick}>
          내 아카이브로 돌아가기
        </NoteButton>
      </div>
      <div className="flex gap-4 items-center">
        <button type="button" onClick={handleMark} className="cursor-pointer">
          {isMark ? <StarIcon /> : <EmptyStarIcon className="text-gray-350 m-[0.38rem]" />}
        </button>

        <NoteButton className="px-3">저장</NoteButton>
        <NoteButton className="px-3">
          <LinkIcon />
          링크 공유
        </NoteButton>
        <KebabIcon className="-ml-[0.125rem] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
