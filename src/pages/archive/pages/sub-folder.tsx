import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DeleteButton from "@components/common/delete-button/delete-button";
import NoteFilter from "@components/common/dropdown/NoteFilter";
import Sort, { SortOrder } from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import { PATHS } from "@routes/paths";
import AddNoteButton from "../components/AddNoteButton/AddNoteButton";
import NoteList from "../components/NoteList/NoteList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FolderNameHeader from "../components/folderNameHeader/FolderNameHeader";
import { AddNoteModal } from "../components/modal/AddNoteModal/AddNoteModal";
import { DeleteNoteModal } from "../components/modal/DeleteNoteModal/DeleteNoteModal";
import { useAddNote } from "../hooks/use-add-note";
import { useFolderList } from "../hooks/use-archive-folder";
import { useDeleteNote, useNoteList } from "../hooks/use-archive-note";
import { useDeleteNoteModal } from "../hooks/use-delete-note-modal";

function SubFolderPage() {
  const { folderId: paramParentFolderId, subFolderId: paramSubFolderId } = useParams();
  const parentFolderId = Number(paramParentFolderId);
  const currentFolderId = Number(paramSubFolderId);
  const isValid = !Number.isNaN(parentFolderId) && !Number.isNaN(currentFolderId);

  const navigate = useNavigate();

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

  // 현재 폴더 메타
  const {
    folderTitle: currentFolderTitle,
    folderColor,
    folderMarkState,
    isError: isCurrentError,
  } = useFolderList(isValid ? { parentFolderId: currentFolderId, order: "edit-newest" } : undefined);

  // 부모 폴더 메타
  const { folderTitle: parentFolderTitle, isError: isParentError } = useFolderList(
    isValid ? { parentFolderId, order: "edit-newest" } : undefined,
  );

  // 노트 목록
  const { noteList, isError: isNotesError } = useNoteList(
    isValid
      ? {
          folderId: currentFolderId,
          order: noteOrder,
          filter: noteFilter ?? undefined,
        }
      : undefined,
  );

  // 삭제 모달 훅
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

  const {
    isModalOpen: isAddNoteModalOpen,
    isAdding: isAddingNote,
    openModal: openAddNoteModal,
    closeModal: closeAddNoteModal,
    handleAddNote,
  } = useAddNote({ folderId: currentFolderId });

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
    } catch {
      closeDeleteModal();
    }
  };

  if (!isValid) return <div className="w-full flex justify-center mt-10">잘못된 경로입니다.</div>; //TODO: fallback UI
  if (isCurrentError || isParentError || isNotesError)
    return <div className="w-full flex justify-center mt-10">에러가 발생했습니다</div>; //TODO: fallback UI

  const crumbs = [
    { label: "사용자의 아카이브", to: PATHS.ARCHIVE },
    { label: parentFolderTitle, to: `${PATHS.ARCHIVE}/${parentFolderId}` },
    { label: currentFolderTitle },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        <div className="self-start">
          <Breadcrumbs items={crumbs} />
        </div>

        <FolderNameHeader
          folderId={currentFolderId}
          folderName={currentFolderTitle}
          color={folderColor}
          markState={folderMarkState}
          onDeleted={() => navigate(`${PATHS.ARCHIVE}/${parentFolderId}`)}
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
              <AddNoteButton onClick={openAddNoteModal} />
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

        <AddNoteModal
          isOpen={isAddNoteModalOpen}
          onClose={closeAddNoteModal}
          onSubmit={handleAddNote}
          isLoading={isAddingNote}
        />
      </div>
    </div>
  );
}

export default SubFolderPage;
