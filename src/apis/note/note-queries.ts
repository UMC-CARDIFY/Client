import { queryOptions } from "@tanstack/react-query";
import { FetchNotesParams } from "./note";
import { fetchNoteList } from "./note";

export const NOTE_QUERY_KEY = {
  ALL: ["notes"],
  LIST: (params?: FetchNotesParams) => ["notes", "list", params],
} as const;

export const NOTE_QUERY_OPTION = {
  LIST: (params?: FetchNotesParams) =>
    queryOptions({
      queryKey: NOTE_QUERY_KEY.LIST(params),
      queryFn: () => fetchNoteList(params),
    }),
};
