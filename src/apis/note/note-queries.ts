import { queryOptions } from "@tanstack/react-query";
import { FetchNoteListParams } from "@typedefs";
import { fetchNoteList, fetchRecentMarkedNotes } from "./note";

export const NOTE_QUERY_KEY = {
  ALL: () => ["notes"] as const,
  LIST: (params?: FetchNoteListParams) => ["notes", "list", params] as const,
  DELETE: (noteId: number) => ["notes", "delete", noteId] as const,
  RECENT_MARKED: () => ["notes", "recent-marked"] as const,
} as const;

export const NOTE_QUERY_OPTION = {
  LIST: (params?: FetchNoteListParams) =>
    queryOptions({
      queryKey: NOTE_QUERY_KEY.LIST(params),
      queryFn: () => fetchNoteList(params),
    }),
  RECENT_MARKED: () =>
    queryOptions({
      queryKey: NOTE_QUERY_KEY.RECENT_MARKED(),
      queryFn: () => fetchRecentMarkedNotes(),
    }),
};
