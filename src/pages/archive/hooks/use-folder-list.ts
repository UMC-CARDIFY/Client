import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { useQuery } from "@tanstack/react-query";

export const useFolderList = () => {
  const { data, isLoading, isError } = useQuery(FOLDER_QUERY_OPTION.LIST());

  return {
    foldersList: data?.foldersList ?? [],
    isLoading,
    isError,
  };
};
