import { queryOptions } from "@tanstack/react-query";
import { FetchFoldersParams, fetchFolderList } from "./folder";

export const FOLDER_QUERY_KEY = {
  ALL: () => ["folders"],
  LIST: (params?: FetchFoldersParams) => ["folders", "list", params],
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
