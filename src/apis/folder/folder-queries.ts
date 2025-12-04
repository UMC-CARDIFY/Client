import { queryOptions } from "@tanstack/react-query";
import { FetchFoldersParams } from "@typedefs";
import { fetchFolderList, getFoldersElement } from "./folder";

export const FOLDER_QUERY_KEY = {
  ALL: () => ["folders"],
  LIST: (params?: FetchFoldersParams) => ["folders", "list", params],
  ELEMENT: (folderId: number) => ["folders", "element", folderId],
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
};
