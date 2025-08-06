import { apiGet } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import { FetchNoteListParams, NoteListResponse, ToggleNoteMarkRequest, ToggleNoteMarkResponse } from "@typedefs";

// 노트 리스트 조회
export const fetchNoteList = (params?: FetchNoteListParams) => {
  return apiGet<NoteListResponse, FetchNoteListParams>(END_POINTS.GET_NOTES_SORT_FILTER, params);
};

// 노트 즐겨찾기 토글
export const toggleNoteMark = async (params: ToggleNoteMarkRequest) => {
  return apiGet<ToggleNoteMarkResponse, ToggleNoteMarkRequest>(END_POINTS.MARK_NOTE, params);
};
