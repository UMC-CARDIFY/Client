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

export interface DeleteNoteResponse {
  isSuccess: boolean;
}

export interface WriteNoteResponse {
  isSuccess: boolean;
}

export interface AddNoteResponse {
  noteId: number;
  createdAt: string;
}

export interface CardItem {
  cardId: number;
  cardName: string;
  contents: string;
  contentsFront: string;
  contentsBack: string;
}

export interface GetNoteResponse {
  noteId: number;
  noteName: string;
  noteContent: Record<string, unknown> | null;
  markState: boolean;
  isEdit: boolean;
  isUpload: boolean;
  cardList: CardItem[];
}

export interface RecentMarkedNote {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  flashCardCount: number;
  markState: "ACTIVE" | "INACTIVE";
  markAt: string;
  noteContentPreview: string | null;
}

export type RecentMarkedNotesResponse = RecentMarkedNote[];
