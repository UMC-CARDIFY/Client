import { queryOptions } from "@tanstack/react-query";
import { FetchNoteListParams } from "@typedefs";
import { fetchNoteList } from "./note";

export const NOTE_QUERY_KEY = {
  ALL: () => ["notes"] as const,
  LIST: (params?: FetchNoteListParams) => ["notes", "list", params] as const,
} as const;

export const NOTE_QUERY_OPTION = {
  LIST: (params?: FetchNoteListParams) =>
    queryOptions({
      queryKey: NOTE_QUERY_KEY.LIST(params),
      queryFn: () => fetchNoteList(params),
    }),
};
