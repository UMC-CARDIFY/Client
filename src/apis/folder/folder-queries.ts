import { queryOptions } from "@tanstack/react-query";
import { FetchFoldersParams } from "@typedefs";
import { fetchFolderList } from "./folder";

export const FOLDER_QUERY_KEY = {
  ALL: () => ["folders"] as const,
  LIST: (params?: FetchFoldersParams) => ["folders", "list", params] as const,
} as const;

export const FOLDER_QUERY_OPTION = {
  LIST: (params?: FetchFoldersParams) =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.LIST(params),
      queryFn: () => fetchFolderList(params),
    }),
  ALL: () =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.ALL(),
      queryFn: () => fetchFolderList(),
    }),
};
