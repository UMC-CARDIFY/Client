export interface NoteItem {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: "ACTIVE" | "INACTIVE";
  flashCardCount: number;
  viewAt: string | null;
  markAt: string | null;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
  content?: string;
}

export interface NoteListResponse {
  noteList: NoteItem[];
  listsize: number;
  currentPage: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface ToggleNoteMarkResponse {
  isSuccess: boolean;
}
