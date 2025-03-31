import { apiPatch } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";

interface ToggleFolderMarkResponse {
  isSuccess: boolean;
  markState: "ACTIVE" | "INACTIVE";
  markDate: string;
}

export const toggleFolderMark = async (folderId: number): Promise<ToggleFolderMarkResponse> => {
  const endpoint = `${END_POINTS.MARK_FOLDER(folderId)}`;
  return apiPatch<ToggleFolderMarkResponse>(endpoint);
};
