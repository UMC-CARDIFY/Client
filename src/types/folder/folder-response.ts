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
