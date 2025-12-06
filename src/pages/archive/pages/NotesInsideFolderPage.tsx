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
import InsideFolderList from "../components/insideFolderList/InsideFolderList";
import { DeleteNoteModal } from "../components/modal/DeleteNoteModal/DeleteNoteModal";
import { AddNoteModal } from "../components/modal/add-note-modal/add-note-modal";
import { useAddNote } from "../hooks/use-add-note";
import { useFolderList } from "../hooks/use-archive-folder";
import { useNoteList } from "../hooks/use-archive-note";
import { useDeleteNoteModal } from "../hooks/use-delete-note-modal";

const NotesInsideFolderPage = () => {
  const navigate = useNavigate();
  const { id: paramFolderId } = useParams();
  const parentFolderId = Number(paramFolderId);
  const isValidId = !Number.isNaN(parentFolderId);

  const [folderOrder, setFolderOrder] = useState<SortOrder>("edit-newest");
  const [noteOrder, setNoteOrder] = useState<SortOrder>("edit-newest");
  const [noteFilter, setNoteFilter] = useState<string | null>(null);

  const [checkedNoteIds, setCheckedNoteIds] = useState<number[]>([]);

  const handleToggleNoteCheck = (noteId: number) => {
    setCheckedNoteIds((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]));
  };

  const handleFolderSortSelect = (value: SortOrder) => setFolderOrder(value);
  const handleNoteSortSelect = (value: SortOrder) => setNoteOrder(value);

  const handleNoteFilterSelect = (value: string | null) => {
    if (value === "withCard") setNoteFilter("card-most");
    else if (value === "withoutCard") setNoteFilter("card-less");
    else setNoteFilter(null);
  };

  const handleToggleAllCheck = (newCheckedIds: number[]) => setCheckedNoteIds(newCheckedIds);

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

  const {
    isOpen: isDeleteModalOpen,
    open: openDeleteModal,
    close: closeDeleteModal,
    noteId,
    noteName,
    additionalCount,
    handleConfirmDelete,
  } = useDeleteNoteModal({
    noteList,
    checkedNoteIds,
    onDeleteSuccess: () => setCheckedNoteIds([]),
  });

  const {
    isModalOpen: isAddNoteModalOpen,
    isAdding: isAddingNote,
    openModal: openAddNoteModal,
    closeModal: closeAddNoteModal,
    handleAddNote,
  } = useAddNote({ folderId: parentFolderId });

  const crumbs = [{ label: "사용자의 아카이브", to: PATHS.ARCHIVE }, { label: folderTitle || "" }];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-[2.5rem] flex flex-col">
        <div className="self-start">
          <Breadcrumbs items={crumbs} />
        </div>

        <FolderNameHeader
          folderId={parentFolderId}
          folderName={folderTitle}
          color={folderColor}
          markState={folderMarkState}
          onDeleted={() => navigate(PATHS.ARCHIVE)}
        />

        <div className="flex flex-col mt-10 gap-4">
          <Text variant="sub_heading4" className="text-base-black ml-2">
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

        <div className="flex flex-col mt-16 gap-4">
          <Text variant="sub_heading4" className="text-base-black ml-[0.5rem]">
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
};

export default NotesInsideFolderPage;
