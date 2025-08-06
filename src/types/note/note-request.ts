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
