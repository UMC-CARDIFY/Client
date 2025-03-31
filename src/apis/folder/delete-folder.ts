import { apiDelete } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";

interface DeleteFolderResponse {
  isSuccess: boolean;
}

export const deleteFolder = async (folderId: number): Promise<DeleteFolderResponse> => {
  const endpoint = `${END_POINTS.DELETE_FOLDER(folderId)}`;
  return apiDelete<DeleteFolderResponse>(endpoint);
};
