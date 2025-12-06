import Button from "@components/common/button/button";
import { useNoteEditor } from "@contexts/note-editor-context";
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
  const { saveNote, isSaving } = useNoteEditor();

  const handleMark = () => {
    setIsMark(!isMark);
  };

  const handleClick = () => {
    route(PATHS.ARCHIVE);
  };

  const handleSave = async () => {
    const success = await saveNote();
    // TODO: alert를 토스트로 변경
    if (success) {
      alert("노트가 저장되었습니다.");
    } else {
      alert("노트 저장에 실패했습니다.");
    }
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

        <Button variant="STROKE" className="px-3 py-2" onClick={handleSave} disabled={isSaving}>
          {isSaving ? "저장 중..." : "저장"}
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
