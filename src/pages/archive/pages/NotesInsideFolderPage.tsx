import { useState } from "react";
import { useParams } from "react-router-dom";

import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import InsideFolderList from "../components/insideFolderList/InsideFolderList";

import { useFolderList } from "@pages/archive/hooks/use-folder";
import { useNoteList } from "../hooks/use-note";

const handleFolderSortSelect = (value: string) => {
  // TODO: 폴더 정렬 기능 구현
};

const handleNoteSortSelect = (value: string) => {
  // TODO: 노트 정렬 기능 구현
};

const handleNoteFilterSelect = (value: string | null) => {
  // TODO: 노트 필터링 기능 구현
};

const NotesInsideFolderPage = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const parentFolderId = Number(folderId);

  const [username, setUsername] = useState("사용자");

  const { foldersList: subFolders, isLoading, isError } = useFolderList({ parentFolderId });

  const {
    noteList,
    isLoading: isNoteLoading,
    isError: isNoteError,
  } = useNoteList({
    folderId: parentFolderId,
    order: "edit-newest",
  });

  // TODO: 추후 별도 API 연결 예정
  const folderName = subFolders?.[0]?.name || "폴더명";
  const folderColor = subFolders?.[0]?.color || "gray";

  if (isLoading || isNoteLoading) return <div>로딩 중...</div>;
  if (isError || isNoteError) return <div>에러가 발생했습니다</div>;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        {/* Breadcrumbs */}
        <div className="self-start">
          <Breadcrumbs username={username} pathSegments={[folderName]} />
        </div>

        {/* FolderNameHeader */}
        <div>
          <FolderNameHeader folderName={folderName} color={folderColor} />
        </div>

        {/* InsideFolderList + SortDropdown */}
        <div className="flex flex-col mt-[2.5rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            폴더
          </Text>
          <div className="z-10">
            <Sort onSelect={handleFolderSortSelect} />
          </div>
          <InsideFolderList folders={subFolders} />
        </div>

        {/* NoteList */}
        <div className="flex flex-col mt-[4rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            노트
          </Text>
          <div className="flex justify-between z-10">
            <div className="flex gap-2">
              <Sort onSelect={handleNoteSortSelect} />
              <NoteFilter onSelect={handleNoteFilterSelect} />
            </div>
            <AddNoteButton />
          </div>
          <NoteList notes={noteList} /> {/* ✅ 노트 목록 바인딩 */}
        </div>
      </div>
    </div>
  );
};

export default NotesInsideFolderPage;
