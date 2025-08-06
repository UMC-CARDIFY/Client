import { useState } from "react";
import { useParams } from "react-router-dom";

import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort, { SortOrder } from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import AddNoteButton from "../components/AddNoteButton/AddNoteButton";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import InsideFolderList from "../components/insideFolderList/InsideFolderList";
import { useFolderList } from "../hooks/use-archive-folder";
import { useNoteList } from "../hooks/use-archive-note";

const NotesInsideFolderPage = () => {
  const { id: paramFolderId } = useParams();
  const parentFolderId = Number(paramFolderId);
  const isValidId = !Number.isNaN(parentFolderId);

  const [folderOrder, setFolderOrder] = useState<SortOrder>("edit-newest");
  const [noteOrder, setNoteOrder] = useState<SortOrder>("edit-newest");

  const [noteFilter, setNoteFilter] = useState<string | null>(null);

  const handleFolderSortSelect = (value: SortOrder) => {
    setFolderOrder(value);
  };

  const handleNoteSortSelect = (value: SortOrder) => {
    setNoteOrder(value);
  };

  const handleNoteFilterSelect = (value: string | null) => {
    if (value === "withCard") {
      setNoteFilter("card-most");
    } else if (value === "withoutCard") {
      setNoteFilter("card-less");
    } else {
      setNoteFilter(null);
    }
  };

  const { folderTitle, folderColor, folderMarkState, foldersList } = useFolderList(
    isValidId ? { parentFolderId, order: folderOrder } : undefined,
  );

  const { noteList } = useNoteList(
    isValidId
      ? {
          folderId: parentFolderId,
          order: noteOrder,
          filter: noteFilter ?? undefined,
        }
      : undefined,
  );

  const pathSegments = ["사용자의 아카이브", folderTitle];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        {/* 경로 표시 */}
        <div className="self-start">
          <Breadcrumbs pathSegments={pathSegments} />
        </div>

        {/* 상단 폴더 정보 */}
        <div>
          <FolderNameHeader
            folderId={parentFolderId}
            folderName={folderTitle}
            color={folderColor}
            markState={folderMarkState}
          />
        </div>

        {/* 하위 폴더 */}
        <div className="flex flex-col mt-[2.5rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            폴더
          </Text>
          <div className="z-10">
            <Sort selected={folderOrder} onSelect={handleFolderSortSelect} />
          </div>
          <InsideFolderList
            folders={foldersList.map((folder) => ({
              folderId: folder.folderId,
              folderName: folder.name,
              color: folder.color,
            }))}
            parentFolderId={parentFolderId}
          />
        </div>

        {/* 노트 리스트 */}
        <div className="flex flex-col mt-[4rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            노트
          </Text>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Sort selected={noteOrder} onSelect={handleNoteSortSelect} />
              <NoteFilter onSelect={handleNoteFilterSelect} />
            </div>
            <AddNoteButton />
          </div>
          <NoteList notes={noteList} />
        </div>
      </div>
    </div>
  );
};

export default NotesInsideFolderPage;
