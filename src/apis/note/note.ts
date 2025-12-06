import { apiDelete, apiGet, apiPost, apiPostMultipart } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import {
  AddNoteRequest,
  AddNoteResponse,
  DeleteNoteRequest,
  DeleteNoteResponse,
  FetchNoteListParams,
  GetNoteRequest,
  GetNoteResponse,
  NoteListResponse,
  RecentMarkedNotesResponse,
  ToggleNoteMarkRequest,
  ToggleNoteMarkResponse,
  WriteNoteRequest,
  WriteNoteResponse,
} from "@typedefs";

// 노트 리스트 조회
export const fetchNoteList = (params?: FetchNoteListParams) => {
  return apiGet<NoteListResponse, FetchNoteListParams>(END_POINTS.GET_NOTES_SORT_FILTER, params);
};

// 노트 즐겨찾기 토글
export const toggleNoteMark = async (params: ToggleNoteMarkRequest) => {
  return apiGet<ToggleNoteMarkResponse, ToggleNoteMarkRequest>(END_POINTS.MARK_NOTE, params);
};

// 노트 삭제
export const deleteNote = (params: DeleteNoteRequest) => {
  return apiDelete<DeleteNoteResponse, DeleteNoteRequest>(END_POINTS.DELETE_NOTE, params);
};

// 노트 작성/저장
export const writeNote = (request: WriteNoteRequest, images?: File[]) => {
  const formData = new FormData();

  const requestBlob = new Blob([JSON.stringify(request)], {
    type: "application/json",
  });
  formData.append("request", requestBlob);

  if (images && images.length > 0) {
    images.forEach((image) => {
      formData.append("images", image);
    });
  }
  return apiPostMultipart<WriteNoteResponse>(END_POINTS.WRITE_NOTE, formData);
};

// 노트 생성
export const addNote = (request: AddNoteRequest) => {
  return apiPost<AddNoteResponse, AddNoteRequest>(END_POINTS.ADD_NOTE, request);
};

// 노트 내용 조회
export const getNote = (params: GetNoteRequest) => {
  return apiGet<GetNoteResponse, GetNoteRequest>(END_POINTS.GET_NOTE, params);
};

// 최근 즐겨찾기한 노트 목록 조회
export const fetchRecentMarkedNotes = () => {
  return apiGet<RecentMarkedNotesResponse>(END_POINTS.GET_RECENT_MARKED_NOTES);
};
