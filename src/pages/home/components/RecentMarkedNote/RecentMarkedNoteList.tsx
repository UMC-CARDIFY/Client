import { NoteItemProps } from "@typedefs";
import EmptyState from "../EmptyState/EmptyState";
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
