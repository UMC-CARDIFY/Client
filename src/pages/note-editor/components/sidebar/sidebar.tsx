import Button from "@components/common/button/button";
import { Text } from "@components/typography/Text";
import { HalfDoubleArrowBoldIcon, LogoIcon, SortIcon } from "@svgs/index";
import FolderList from "../folder-list/folder-list";
import NoteList from "../note-list/note-list";
import Section from "../section/section";

const Sidebar = () => {
  return (
    <div className="w-[22rem] min-h-full bg-white border">
      <div className="py-4 pl-10 pr-4 flex justify-between items-center">
        <LogoIcon />
        <Button variant="SIZE" size="XL">
          <HalfDoubleArrowBoldIcon className="text-gray-400" />
        </Button>
      </div>
      <div className="w-full h-[1px] bg-gray-150" />
      <div className="flex justify-between py-4 pl-10 pr-4">
        <div className="flex gap-2">
          <div>폴더</div>
          <div>플래시 카드</div>
        </div>
        <Button variant="SIZE" size="M">
          <SortIcon className="w-6 h-6" />
        </Button>
      </div>
      <div className="w-full h-[1px] bg-gray-150" />
      <div className="pt-4 pl-10 pr-7">
        <div className="flex gap-2 items-center">
          <div>아이콘</div>
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
      </div>
    </div>
  );
};

export default Sidebar;
