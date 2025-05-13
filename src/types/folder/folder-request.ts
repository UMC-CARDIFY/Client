export interface FetchFoldersParams {
  parentFolderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

export interface FolderData {
  folderName: string;
  color: string;
  goalId: number;
}

export interface CreateFolderRequest {
  name: string;
  color: string;
}

export interface UpdateFolderRequest {
  name: string;
  color: string;
}
