import { queryOptions } from "@tanstack/react-query";
import { FetchFoldersParams } from "@typedefs";
import { fetchFolderList, fetchRecentMarkedFolders, getFoldersElement } from "./folder";

export const FOLDER_QUERY_KEY = {
  ALL: () => ["folders"] as const,
  LIST: (params?: FetchFoldersParams) => ["folders", "list", params] as const,
  ELEMENT: (folderId: number) => ["folders", "element", folderId] as const,
  RECENT_MARKED: () => ["folders", "recent-marked"] as const,
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
  ELEMENT: (folderId: number) =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.ELEMENT(folderId),
      queryFn: () => getFoldersElement(folderId),
    }),
  RECENT_MARKED: () =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.RECENT_MARKED(),
      queryFn: () => fetchRecentMarkedFolders(),
    }),
};
