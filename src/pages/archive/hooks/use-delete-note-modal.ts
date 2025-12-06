import type { NoteItem } from "@typedefs";
import { useMemo, useState } from "react";

export function useDeleteNoteModal(noteList: NoteItem[], checkedNoteIds: number[]) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedNotes = useMemo(
    () => (checkedNoteIds.length ? noteList.filter((n) => checkedNoteIds.includes(n.noteId)) : []),
    [noteList, checkedNoteIds],
  );

  const first = selectedNotes[0];
  const additionalCount = Math.max(0, selectedNotes.length - 1);
  const selectedIds = useMemo(() => selectedNotes.map((n) => n.noteId), [selectedNotes]);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    noteId: first?.noteId ?? 0,
    noteName: first?.name ?? "",
    additionalCount,
    selectedIds,
  };
}
