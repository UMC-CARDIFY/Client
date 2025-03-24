import { queryOptions } from "@tanstack/react-query";
import { fetchFolderList } from "./folder";

export const FOLDER_QUERY_KEY = {
  ALL: ["folders"],
  LIST: () => [...FOLDER_QUERY_KEY.ALL, "list"],
} as const;

export const FOLDER_QUERY_OPTION = {
  LIST: () =>
    queryOptions({
      queryKey: FOLDER_QUERY_KEY.LIST(),
      queryFn: () => fetchFolderList(),
    }),
};
