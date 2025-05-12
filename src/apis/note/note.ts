import { apiGet } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import { NoteListResponse } from "@typedefs/note-response";

export interface FetchNotesParams {
  folderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
}

export const fetchNoteList = (params?: FetchNotesParams) => {
  return apiGet<NoteListResponse, FetchNotesParams>(END_POINTS.GET_NOTE_SORT_FILTER, params);
};
