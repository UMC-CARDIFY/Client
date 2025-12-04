import Button from "@components/common/button/button";
import { Text } from "@components/typography/Text";
import { useFoldersElement } from "@pages/note-editor/hooks/use-folders";
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

  //TODO: 추후 useParams로 변경
  const folderId = 3;

  const { data, isLoading, isError } = useFoldersElement(folderId);

  console.log(data);

  //TODO: 로딩 ui 받으면 suspense로 수정 및 에러도 에러바운더리로 리팩토링 예정
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다</div>;

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
              {/* TODO: 색상 변경 */}
              <FolderIcon /> {/* data.color */}
              <Text variant="sub_heading3">{data?.name}</Text>
            </div>
            <Section title="즐겨찾기 한 항목">
              {data?.markElementList.folderList.map((folder) => (
                <FolderList key={folder.folderId}>{folder.name}</FolderList>
              ))}
              {data?.markElementList.noteList.map((note) => (
                <NoteList key={note.noteId}>{note.name}</NoteList>
              ))}
            </Section>
            <Section title="폴더">
              {data?.notMarkElementList.folderList.map((folder) => (
                <FolderList key={folder.folderId}>{folder.name}</FolderList>
              ))}
            </Section>
            <Section title="노트">
              {data?.notMarkElementList.noteList.map((note) => (
                <NoteList key={note.noteId}>{note.name}</NoteList>
              ))}
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
