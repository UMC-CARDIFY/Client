import Button from "@components/common/button/button";
import { Text } from "@components/typography/Text";
import { FolderIcon, HalfDoubleArrowBoldIcon, LogoIcon, PlusIcon, SortIcon } from "@svgs/index";
import { useState } from "react";
import FolderList from "../folder-list/folder-list";
import NoteList from "../note-list/note-list";
import Section from "../section/section";
import Tab from "../tab/tab";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<"폴더" | "플래시 카드">("폴더");

  return (
    <div className="w-[22rem] min-h-full bg-white border relative h-screen">
      <div className="py-4 pl-10 pr-4 flex justify-between items-center">
        <LogoIcon />
        <Button variant="SIZE" size="XL">
          <HalfDoubleArrowBoldIcon className="text-gray-400" />
        </Button>
      </div>
      <div className="flex justify-between py-4 pl-10 pr-4">
        <div className="flex gap-2">
          <Tab isActive={activeTab === "폴더"} onClick={() => setActiveTab("폴더")}>
            폴더
          </Tab>
          <Tab isActive={activeTab === "플래시 카드"} onClick={() => setActiveTab("플래시 카드")}>
            플래시 카드
          </Tab>
        </div>

        <Button variant="SIZE" size="M">
          <SortIcon className="w-6 h-6" />
        </Button>
      </div>
      <div className="w-full h-[1px] bg-gray-150" />
      {activeTab === "폴더" && (
        <div className="pt-4 pl-10 pr-7">
          <>
            <div className="flex gap-2 items-center">
              <FolderIcon />
              <Text variant="sub_heading3">생물학</Text>
            </div>
            <Section title="즐겨찾기 한 항목">
              <FolderList>진화와 분류학</FolderList>
            </Section>
            <Section title="폴더">
              <FolderList notes={["CH3. 세포막과 물질 이동", "CH3. 세포막과 물질 이동"]}>진화와 분류학</FolderList>
            </Section>
            <Section title="노트">
              <NoteList>CH3. 세포막과 물질 이동</NoteList>
            </Section>
            <Button variant="SMALL" className="absolute bottom-[3.56rem] left-1/2 -translate-x-1/2">
              <PlusIcon /> 추가
            </Button>
          </>
        </div>
      )}

      {activeTab === "플래시 카드" && <></>}
    </div>
  );
};

export default Sidebar;
