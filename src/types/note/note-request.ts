export interface FetchNoteListParams {
  folderId?: number;
  page?: number;
  size?: number;
  order?: string;
  color?: string;
  filter?: string;
}

export interface ToggleNoteMarkRequest {
  noteId: number;
  isMark: boolean;
}

export interface DeleteNoteRequest {
  noteId: number;
}

// 노트 작성 API 관련 타입
export interface ImageOverlay {
  positionOfX: number;
  positionOfY: number;
  width: number;
  height: number;
}

export interface NoteContentAttrs {
  level?: number;
  reversed?: boolean;
  question_front?: string;
  question_back?: string;
  answer?: string[];
  color?: string;
  backgroundColor?: string;
  baseImageWidth?: number;
  baseImageHeight?: number;
  overlays?: ImageOverlay[];
}

export interface NoteContentMark {
  type: string;
  attrs?: NoteContentAttrs;
}

export interface NoteContent {
  type: string;
  text?: string;
  content?: NoteContent[];
  attrs?: NoteContentAttrs;
  marks?: NoteContentMark[];
}

export interface WriteNoteRequest {
  noteId: number;
  name: string;
  mode: string;
  contents: NoteContent;
}

export interface AddNoteRequest {
  folderId: number;
}

export interface GetNoteRequest {
  noteId: number;
}
