import { deleteNote } from "@apis/note/note";
import { NOTE_QUERY_KEY } from "@apis/note/note-queries";
import { useQueryClient } from "@tanstack/react-query";
import type { NoteItem } from "@typedefs";
import { useMemo, useState } from "react";

interface UseDeleteNoteModalOptions {
  noteList: NoteItem[];
  checkedNoteIds: number[];
  onDeleteSuccess?: () => void;
}

export function useDeleteNoteModal({ noteList, checkedNoteIds, onDeleteSuccess }: UseDeleteNoteModalOptions) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const selectedNotes = useMemo(
    () => (checkedNoteIds.length ? noteList.filter((n) => checkedNoteIds.includes(n.noteId)) : []),
    [noteList, checkedNoteIds],
  );

  const first = selectedNotes[0];
  const additionalCount = Math.max(0, selectedNotes.length - 1);
  const selectedIds = useMemo(() => selectedNotes.map((n) => n.noteId), [selectedNotes]);

  const close = () => setIsOpen(false);

  const handleConfirmDelete = async () => {
    if (selectedIds.length === 0) {
      close();
      return;
    }

    setIsDeleting(true);
    try {
      if (selectedIds.length === 1) {
        await deleteNote({ noteId: selectedIds[0] });
      } else {
        await Promise.allSettled(selectedIds.map((id) => deleteNote({ noteId: id })));
      }
      queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY.ALL() });
      onDeleteSuccess?.();
      close();
    } catch {
      close();
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    isOpen,
    isDeleting,
    open: () => setIsOpen(true),
    close,
    noteId: first?.noteId ?? 0,
    noteName: first?.name ?? "",
    additionalCount,
    selectedIds,
    handleConfirmDelete,
  };
}
