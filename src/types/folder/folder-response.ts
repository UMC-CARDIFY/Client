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
  parentFolderId: number;
  parentFolderName: string;
  parentFolderColor: string;
  parentMarkState: "INACTIVE" | "ACTIVE";
  foldersList: FolderItem[];
  listSize: number;
  currentPage: number;
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface PostSubFolderResponse {
  parent_folderId: number;
  folderId: number;
  name: string;
  color: string;
  createdAt: string;
}

export interface PatchFolderResponse {
  folderId: number;
  name: string;
  color: string;
  editDate: string;
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
  flashCardCount: number;
  viewAt: string;
  markAt: string;
  editDate: string;
  createdAt: string;
  isDownload: boolean;
  isUpload: boolean;
}

export interface NotMarkElementList {
  folderList: FolderItem[];
  noteList: NoteItem[];
}
