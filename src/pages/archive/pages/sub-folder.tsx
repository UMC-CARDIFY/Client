import { useState } from "react";
import { useParams } from "react-router-dom";

import DeleteButton from "@components/common/delete-button/delete-button";
import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort, { SortOrder } from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import AddNoteButton from "../components/AddNoteButton/AddNoteButton";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import { DeleteNoteModal } from "../components/modal/DeleteNoteModal/DeleteNoteModal";
import { useFolderList } from "../hooks/use-archive-folder";
import { useDeleteNote, useNoteList } from "../hooks/use-archive-note";
import { useDeleteNoteModal } from "../hooks/use-delete-note-modal";

export default function SubFolderPage() {
  const { folderId: paramParentFolderId, subFolderId: paramSubFolderId } = useParams();
  const parentFolderId = Number(paramParentFolderId);
  const currentFolderId = Number(paramSubFolderId);
  const isValid = !Number.isNaN(parentFolderId) && !Number.isNaN(currentFolderId);

  const [noteOrder, setNoteOrder] = useState<SortOrder>("edit-newest");
  const [noteFilter, setNoteFilter] = useState<string | null>(null);
  const [checkedNoteIds, setCheckedNoteIds] = useState<number[]>([]);

  const handleToggleNoteCheck = (noteId: number) => {
    setCheckedNoteIds((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]));
  };
  const handleToggleAllCheck = (newCheckedIds: number[]) => setCheckedNoteIds(newCheckedIds);
  const handleNoteSortSelect = (value: SortOrder) => setNoteOrder(value);
  const handleNoteFilterSelect = (value: string | null) => {
    if (value === "withCard") setNoteFilter("card-most");
    else if (value === "withoutCard") setNoteFilter("card-less");
    else setNoteFilter(null);
  };

  const {
    folderTitle: currentFolderTitle,
    folderColor,
    folderMarkState,
    isLoading: isCurrentLoading,
    isError: isCurrentError,
  } = useFolderList(isValid ? { parentFolderId: currentFolderId, order: "edit-newest" } : undefined);

  const {
    folderTitle: parentFolderTitle,
    isLoading: isParentLoading,
    isError: isParentError,
  } = useFolderList(isValid ? { parentFolderId, order: "edit-newest" } : undefined);

  const {
    noteList,
    isLoading: isNotesLoading,
    isError: isNotesError,
  } = useNoteList(
    isValid
      ? {
          folderId: currentFolderId,
          order: noteOrder,
          filter: noteFilter ?? undefined,
        }
      : undefined,
  );

  const {
    isOpen: isDeleteModalOpen,
    open: openDeleteModal,
    close: closeDeleteModal,
    noteId,
    noteName,
    additionalCount,
    selectedIds,
  } = useDeleteNoteModal(noteList, checkedNoteIds);

  const { mutateAsync: deleteNoteMutate } = useDeleteNote();

  const handleConfirmDelete = async () => {
    try {
      if (selectedIds.length === 0) {
        closeDeleteModal();
        return;
      }
      if (selectedIds.length === 1) {
        await deleteNoteMutate({ noteId: selectedIds[0] });
      } else {
        await Promise.allSettled(selectedIds.map((id) => deleteNoteMutate({ noteId: id })));
      }
      setCheckedNoteIds([]);
      closeDeleteModal();
    } catch (e) {
      closeDeleteModal();
    }
  };

  const pathSegments = ["사용자의 아카이브", parentFolderTitle, currentFolderTitle].filter(Boolean) as string[];

  if (!isValid) return <div className="w-full flex justify-center mt-10">잘못된 경로입니다.</div>; //TODO: fallback UI 요청
  if (isCurrentLoading || isParentLoading || isNotesLoading)
    return <div className="w-full flex justify-center mt-10">로딩 중...</div>; //TODO: 로딩 컴포넌트로 갈아끼우기
  if (isCurrentError || isParentError || isNotesError)
    return <div className="w-full flex justify-center mt-10">에러가 발생했습니다</div>; //TODO: fallback UI

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        <div className="self-start">
          <Breadcrumbs pathSegments={pathSegments} />
        </div>

        <FolderNameHeader
          folderId={currentFolderId}
          folderName={currentFolderTitle}
          color={folderColor}
          markState={folderMarkState}
        />

        <div className="flex flex-col mt-[4rem] gap-[1rem]">
          <Text variant="sub_heading3" className="text-base-black ml-[0.5rem]">
            노트
          </Text>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Sort selected={noteOrder} onSelect={handleNoteSortSelect} />
              <NoteFilter onSelect={handleNoteFilterSelect} />
            </div>

            <div className="flex gap-2 items-center">
              {checkedNoteIds.length > 0 && <DeleteButton onClick={openDeleteModal} />}
              <AddNoteButton />
            </div>
          </div>

          <NoteList
            notes={noteList}
            checkedNoteIds={checkedNoteIds}
            onToggleCheck={handleToggleNoteCheck}
            onToggleAllCheck={handleToggleAllCheck}
          />
        </div>

        <DeleteNoteModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onSubmit={handleConfirmDelete}
          noteId={noteId}
          noteName={noteName}
          additionalCount={additionalCount}
        />
      </div>
    </div>
  );
}
