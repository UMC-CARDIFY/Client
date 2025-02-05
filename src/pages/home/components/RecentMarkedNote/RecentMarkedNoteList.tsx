import React from "react";
import RecentMarkedNoteItem from "./RecentMarkedNoteItem";

interface NoteItemProps {
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
  content: string;
}

interface RecentMarkedNoteListProps {
  items?: NoteItemProps[];
}

const RecentMarkedNoteList: React.FC<RecentMarkedNoteListProps> = ({ items = [] }) => {
  if (!items?.length) {
    return (
      <div className="flex flex-col w-[52rem] h-60 items-center justify-center text-gray-400">
        즐겨찾기한 노트가 없습니다.
      </div>
    );
  }
  return (
    <div className="w-full flex flex-row gap-4">
      {items.map((item) => (
        {items.map((item) => (
          <RecentMarkedNoteItem key={item.noteId} {...item} />
        ))}
      ))}
    </div>
  );
};

export default RecentMarkedNoteList;
