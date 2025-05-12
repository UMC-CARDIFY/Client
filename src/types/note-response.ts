export interface NoteItem {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: "ACTIVE" | "INACTIVE";
  flashCardCount: number;
  viewAt: string;
  markAt: string;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
}

export interface NoteListResponse {
  noteList: NoteItem[];
  listSize: number;
  currentPage: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}
