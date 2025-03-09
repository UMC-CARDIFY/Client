import React from "react";
import { NoteItemProps } from "../../../../types/note";
<<<<<<< HEAD
=======
import EmptyState from "../EmptyState/EmptyState";
>>>>>>> 2ed292607373876b825871ff7894c25462ca4954
import RecentMarkedNoteItem from "./RecentMarkedNoteItem";

interface RecentMarkedNoteListProps {
  items?: NoteItemProps[];
}

const RecentMarkedNoteList: React.FC<RecentMarkedNoteListProps> = ({ items = [] }) => {
  if (!items.length) {
    return <EmptyState type="favoriteNote" />;
  }
  return (
    <div className="w-full flex flex-row gap-4">
      {items.map((item) => (
        <RecentMarkedNoteItem key={item.noteId} {...item} />
      ))}
    </div>
  );
};

export default RecentMarkedNoteList;
