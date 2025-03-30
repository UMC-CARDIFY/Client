import { apiGet, apiPost } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import { FolderListResponse } from "@typedefs/folder-response";

export interface FetchFoldersParams {
  parentFolderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

export interface PostFoldersBody {
  name: string;
  color: string;
}

export const fetchFolderList = (params?: FetchFoldersParams) => {
  return apiGet<FolderListResponse, FetchFoldersParams>(END_POINTS.GET_SORT_FILTER, params);
};

export const postFolders = (body?: PostFoldersBody) => {
  return apiPost<PostFoldersBody, FetchFoldersParams>(END_POINTS.POST_FOLDERS, body);
};
