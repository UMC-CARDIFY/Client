export interface DeleteFolderResponse {
  isSuccess: boolean;
}

export interface ToggleFolderMarkResponse {
  isSuccess: boolean;
  markState: "ACTIVE" | "INACTIVE";
  markDate: string;
}

export interface FolderItem {
  folderId: number;
  name: string;
  color: string;
  markState: "INACTIVE" | "ACTIVE";
  getNoteCount: number;
  markDate: string;
  editDate: string;
  createdAt: string;
}

export interface FolderListResponse {
  foldersList: FolderItem[];
  listSize: number;
  currentPage: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface FolderElementResponse {
  folderId: number;
  name: string;
  color: string;
  markElementList: MarkElementList;
  notMarkElementList: NotMarkElementList;
}

export interface MarkElementList {
  folderList: FolderItem[];
  noteList: NoteItem[];
}

export interface NoteItem {
  noteId: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  markState: "INACTIVE" | "ACTIVE";
  flashCardCount: 0;
  viewAt: null;
  markAt: "25/12/04";
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
}

export interface NotMarkElementList {
  folderList: FolderItem[];
  noteList: NoteItem[];
}
