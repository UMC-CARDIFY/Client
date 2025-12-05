import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { useQuery } from "@tanstack/react-query";

export const useFoldersElement = (folderId: number) => {
  const { data, isLoading, isError } = useQuery(FOLDER_QUERY_OPTION.ELEMENT(folderId));

  return {
    data,
    isLoading,
    isError,
  };
};
