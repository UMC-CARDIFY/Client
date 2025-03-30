import { apiGet, apiPatch, apiPost } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import { FolderListResponse } from "@typedefs/folder-response";

export interface FetchFoldersParams {
  parentFolderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

export interface FolderData {
  name: string;
  color: string;
}

export const fetchFolderList = (params?: FetchFoldersParams) => {
  return apiGet<FolderListResponse, FetchFoldersParams>(END_POINTS.GET_SORT_FILTER, params);
};

export const postFolders = (body?: FolderData) => {
  return apiPost(END_POINTS.POST_FOLDERS, body);
};

export const patchFolders = (folderId: number, body?: FolderData) => {
  return apiPatch(END_POINTS.PATCH_FOLDERS(folderId), body);
};
