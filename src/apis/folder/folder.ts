import { apiDelete, apiGet, apiPatch } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import {
  FetchFoldersParams,
  DeleteFolderResponse,
  ToggleFolderMarkResponse,
  FolderListResponse,
} from "@typedefs/folder";

export const fetchFolderList = (params?: FetchFoldersParams) => {
  return apiGet<FolderListResponse, FetchFoldersParams>(END_POINTS.GET_SORT_FILTER, params);
};

export const deleteFolder = async (folderId: number): Promise<DeleteFolderResponse> => {
  const endpoint = `${END_POINTS.DELETE_FOLDER(folderId)}`;
  return apiDelete<DeleteFolderResponse>(endpoint);
};

export const toggleFolderMark = async (folderId: number): Promise<ToggleFolderMarkResponse> => {
  return apiPatch<ToggleFolderMarkResponse>(END_POINTS.MARK_FOLDER(folderId));
};
