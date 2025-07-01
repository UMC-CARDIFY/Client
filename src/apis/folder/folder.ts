import { apiDelete, apiGet, apiPatch, apiPost } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import {
  CreateFolderRequest,
  DeleteFolderResponse,
  FetchFoldersParams,
  FolderListResponse,
  ToggleFolderMarkResponse,
  UpdateFolderRequest,
} from "@typedefs";

export const fetchFolderList = (params?: FetchFoldersParams) => {
  return apiGet<FolderListResponse, FetchFoldersParams>(END_POINTS.GET_SORT_FILTER, params);
};

export const deleteFolder = async (folderId: number): Promise<DeleteFolderResponse> => {
  return apiDelete<DeleteFolderResponse>(END_POINTS.DELETE_FOLDER(folderId));
};

export const toggleFolderMark = async (folderId: number): Promise<ToggleFolderMarkResponse> => {
  return apiPatch<ToggleFolderMarkResponse>(END_POINTS.MARK_FOLDER(folderId));
};

export const postFolders = (body: CreateFolderRequest) => {
  return apiPost(END_POINTS.POST_FOLDERS, body);
};

export const patchFolders = (folderId: number, body: UpdateFolderRequest) => {
  return apiPatch(END_POINTS.PATCH_FOLDERS(folderId), body);
};
