import Button from "@components/common/button/button";
import { PATHS } from "@routes/paths";
import { EmptyStarIcon, HalfDoubleArrowBoldIcon, KebabIcon, LinkIcon, StarIcon } from "@svgs/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <header className="py-5 px-8 h-[4.5rem] bg-white border-b min-w-[68rem] flex justify-between">
      <div className="flex gap-4">
        {!isSidebarCollapsed && (
          <Button variant="SIZE" size="XL" onClick={onOpenSidebar}>
            <HalfDoubleArrowBoldIcon className="text-gray-400 rotate-180" />
          </Button>
        )}
        <Button variant="STROKE" className="px-4" onClick={handleClick}>
          내 아카이브로 돌아가기
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <button type="button" onClick={handleMark} className="cursor-pointer">
          {isMark ? <StarIcon /> : <EmptyStarIcon className="text-gray-350 m-[0.38rem]" />}
        </button>

        <Button variant="STROKE" className="px-3 py-2">
          저장
        </Button>
        <Button variant="STROKE" className="px-3 py-2">
          <LinkIcon />
          링크 공유
        </Button>
        <KebabIcon className="-ml-[0.125rem] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
