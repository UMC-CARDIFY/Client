import Button from "@components/common/button/button";
import { Text } from "@components/typography/Text";
import { FolderIcon, HalfDoubleArrowBoldIcon, LogoIcon, PlusIcon, SortIcon } from "@svgs/index";
import { useState } from "react";
import FlashcardList from "../flashcard-list/flashcard-list";
import FolderList from "../folder-list/folder-list";
import NoteList from "../note-list/note-list";
import Section from "../section/section";
import Tab from "../tab/tab";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<"폴더" | "플래시 카드">("폴더");

  if (!isCollapsed) return null;

  return (
    <div className="w-[22rem] min-h-full bg-white border-r relative h-screen transition-all duration-300 ease-in-out">
      <div className="py-4 pl-10 pr-4 flex justify-between items-center border-b border-gray-150 h-[4.5rem]">
        <LogoIcon />
        <Button variant="SIZE" size="XL" onClick={onToggle}>
          <HalfDoubleArrowBoldIcon className="text-gray-400" />
        </Button>
      </div>

      <div className="flex justify-between py-2 pl-10 pr-3">
        <div className="flex gap-2">
          <Tab isActive={activeTab === "폴더"} onClick={() => setActiveTab("폴더")}>
            폴더
          </Tab>
          <Tab isActive={activeTab === "플래시 카드"} onClick={() => setActiveTab("플래시 카드")}>
            플래시 카드
          </Tab>
        </div>

        <Button variant="SIZE" size="L">
          <SortIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="w-full h-[1px] bg-gray-150" />

      {activeTab === "폴더" && (
        <div className="pt-4 px-10">
          <>
            <div className="flex gap-2 items-center">
              <FolderIcon />
              <Text variant="sub_heading3">생물학</Text>
            </div>
            <Section title="즐겨찾기 한 항목">
              <FolderList>진화와 분류학</FolderList>
              <NoteList>CH3. 세포막과 물질 이동</NoteList>
            </Section>
            <Section title="폴더">
              <FolderList>진화와 분류학</FolderList>
            </Section>
            <Section title="노트">
              <NoteList>CH3. 세포막과 물질 이동</NoteList>
              <NoteList>CH3. 세포막과 물질 이동</NoteList>
            </Section>
            <Button
              variant="SMALL"
              className="absolute bottom-[3.56rem] left-1/2 -translate-x-1/2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
            >
              <PlusIcon className="text-gray-500" /> 추가
            </Button>
          </>
        </div>
      )}

      {activeTab === "플래시 카드" && (
        <>
          <FlashcardList type="TEXT" />
        </>
      )}
    </div>
  );
};

export default Sidebar;
