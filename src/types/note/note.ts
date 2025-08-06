export interface NoteItemProps {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: "ACTIVE" | "INACTIVE";
  viewAt: string | null;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
  flashCardCount: number;
  content?: string;
}
