import axiosInstance from "@apis/config/instance";
import { END_POINTS } from "@constants/api";
import { FolderListResponse } from "../../types/folder-response";

export interface FetchFoldersParams {
  parentFolderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

export const fetchFolderList = async (params?: FetchFoldersParams): Promise<FolderListResponse> => {
  const response = await axiosInstance.get(END_POINTS.GET_SORT_FILTER, {
    params,
  });
  return response.data;
};
