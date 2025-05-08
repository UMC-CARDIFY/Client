export interface MainFolderItemProps {
  folderId: number;
  folderName: string;
  createdAt: string;
  noteCount: number;
  folderColor: string;
  markState: boolean;
}

export interface FetchFoldersParams {
  parentFolderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

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
