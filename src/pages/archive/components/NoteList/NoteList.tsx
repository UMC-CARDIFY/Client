import Pagination from "@components/common/pagination/Pagination";
import { Text } from "@components/typography/Text";
import { ArchiveNoteIcon, CheckboxFilledIcon, CheckboxIcon } from "@svgs/index";
import { NoteItem } from "@typedefs";
import { useState } from "react";
import EmptyState from "../EmptyState/EmptyState";
import NoteItemComponent from "../NoteItem/NoteItem";

const GRID = "grid grid-cols-[16px_16px_16px_24px_28px_1fr_110px_110px_110px] items-center";
const SEP = "flex items-center before:content-[''] before:block before:w-px before:h-6 before:bg-gray-150";

interface NoteListProps {
  notes?: NoteItem[];
  checkedNoteIds: number[];
  onToggleCheck: (noteId: number) => void;
  onToggleAllCheck: (noteIds: number[]) => void;
}

const ITEMS_PER_PAGE = 10;

const NoteList: React.FC<NoteListProps> = ({ notes = [], checkedNoteIds, onToggleCheck, onToggleAllCheck }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [emptyPageMaster, setEmptyPageMaster] = useState(false);

  const totalPages = Math.ceil(notes.length / ITEMS_PER_PAGE);
  const hasPagination = totalPages > 1;

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotes = notes.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const pageHasNotes = paginatedNotes.length > 0;
  const allChecked = pageHasNotes ? paginatedNotes.every((n) => checkedNoteIds.includes(n.noteId)) : emptyPageMaster;

  const handleToggleAll = () => {
    if (pageHasNotes) {
      if (allChecked) {
        onToggleAllCheck([]);
      } else {
        const pageNoteIds = paginatedNotes.map((n) => n.noteId);
        onToggleAllCheck(Array.from(new Set([...checkedNoteIds, ...pageNoteIds])));
      }
    } else {
      setEmptyPageMaster((v) => !v);
      onToggleAllCheck([]);
    }
  };

  return (
    <div className={`w-full ${!hasPagination ? "pb-32" : ""}`}>
      <div className={`${GRID} pl-4 py-3`}>
        <button
          onClick={handleToggleAll}
          className="w-4 h-4 inline-flex items-center justify-center cursor-pointer"
          aria-label="현재 페이지 전체 선택"
        >
          {allChecked ? <CheckboxFilledIcon className="w-4 h-4" /> : <CheckboxIcon className="w-4 h-4" />}
        </button>
        <div />

        <ArchiveNoteIcon className="w-6 h-6 fill-gray-350" />

        <div className={`${SEP} before:ml-6 before:mr-4`}>
          <Text variant="sub_heading3" className="text-gray-500">
            노트 이름
          </Text>
        </div>

        <div className={`${SEP} before:mr-4`}>
          <Text variant="sub_heading3" className="text-gray-500">
            노트 생성일
          </Text>
        </div>

        <div className={`${SEP} before:mr-4`}>
          <Text variant="sub_heading3" className="text-gray-500">
            최근 수정일
          </Text>
        </div>

        <div className={`${SEP} before:mr-4`}>
          <Text variant="sub_heading3" className="text-gray-500">
            플래시 카드
          </Text>
        </div>
      </div>

      <div className="bg-gray-150 h-px w-full my-2" />

      {paginatedNotes.length === 0 ? (
        <div className="mt-12">
          <EmptyState type="note" />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {paginatedNotes.map((note) => (
            <NoteItemComponent
              key={note.noteId}
              {...note}
              isChecked={checkedNoteIds.includes(note.noteId)}
              onToggleCheck={() => onToggleCheck(note.noteId)}
            />
          ))}
        </div>
      )}

      {hasPagination && (
        <div className="mt-14 mb-[2.75rem] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default NoteList;
