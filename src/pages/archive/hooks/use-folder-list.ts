import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { useQuery } from "@tanstack/react-query";
import { FetchFoldersParams } from "@typedefs/folder";

export const useFolderList = (params?: FetchFoldersParams) => {
  const { data, isLoading, isError } = useQuery(FOLDER_QUERY_OPTION.LIST(params));

  return {
    foldersList: data?.foldersList ?? [],
    isLoading,
    isError,
  };
};
