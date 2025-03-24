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
