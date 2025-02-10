import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxIcon } from "@svgs/index";
import { useState } from "react";
import NoteItemData from "src/mocks/NoteItemData";
import NoteItem from "../NoteItem/NoteItem";
import EmptyNoteState from "../emptyState/EmptyNoteState";

interface NoteData {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: boolean;
  viewAt: string;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
  flashCardCount: number;
}

interface NoteListProps {
  notes?: NoteData[];
}

const ITEMS_PER_PAGE = 10; // ✅ 한 페이지에 노트 10개씩 표시

const NoteList: React.FC<NoteListProps> = ({ notes = NoteItemData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(notes.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotes = notes.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="w-[50rem]">
      <div className="flex items-center py-[0.75rem] pl-[3rem] pr-[2rem]">
        <CheckboxIcon className="mr-[1.5rem] cursor-pointer" />
        <ArchiveNoteIcon className="mr-[1.62rem] fill-gray-350" />
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="ml-[1rem] flex-grow text-gray-500">
          노트 이름
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.9rem]">
          노트 생성일
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1rem] pr-[1.9rem]">
          최근 수정일
        </Text>
        <div className="bg-gray-150 h-[1.5rem] w-[1px]" />
        <Text variant="sub_heading3" className="text-gray-500 pl-[1.06rem]">
          플래시 카드
        </Text>
      </div>

      <div className="bg-gray-150 h-[1px] w-full my-[0.5rem]" />

      {paginatedNotes.length === 0 ? (
        <div className="mt-12">
          <EmptyNoteState />
        </div>
      ) : (
        <div className="gap-2 flex flex-col">
          {paginatedNotes.map((note) => (
            <NoteItem
              key={note.noteId}
              noteId={note.noteId}
              name={note.name}
              folderId={note.folderId}
              folderName={note.folderName}
              folderColor={note.folderColor}
              markState={note.markState}
              viewAt={note.viewAt}
              editDate={note.editDate}
              createdAt={note.createdAt}
              isDownload={note.isDownload}
              isUpload={note.isUpload}
              flashCardCount={note.flashCardCount}
            />
          ))}
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-14 mb-[2.75rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default NoteList;
