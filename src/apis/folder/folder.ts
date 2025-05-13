import { apiDelete, apiGet, apiPost, apiPatch } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import {
  DeleteFolderResponse,
  FetchFoldersParams,
  FolderListResponse,
  ToggleFolderMarkResponse,
} from "@typedefs/folder";

export const fetchFolderList = (params?: FetchFoldersParams) => {
  return apiGet<FolderListResponse, FetchFoldersParams>(
    END_POINTS.GET_SORT_FILTER,
    params
  );
};

export const deleteFolder = async (folderId: number): Promise<DeleteFolderResponse> => {
  const endpoint = `${END_POINTS.DELETE_FOLDER(folderId)}`;
  return apiDelete<DeleteFolderResponse>(endpoint);
};

export const toggleFolderMark = async (folderId: number): Promise<ToggleFolderMarkResponse> => {
  return apiPatch<ToggleFolderMarkResponse>(END_POINTS.MARK_FOLDER(folderId));
};

export const postFolders = (body?: FolderData) => {
  return apiPost(END_POINTS.POST_FOLDERS, body);
};

export const patchFolders = (folderId: number, body?: FolderData) => {
  return apiPatch(END_POINTS.PATCH_FOLDERS(folderId), body);
};
