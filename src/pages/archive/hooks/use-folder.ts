import { deleteFolder, toggleFolderMark } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY, FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchFoldersParams } from "@typedefs/folder";

export const useFolderList = (params?: FetchFoldersParams) => {
  const { data, isLoading, isError } = useQuery(FOLDER_QUERY_OPTION.LIST(params));

  return {
    foldersList: data?.foldersList ?? [],
    isLoading,
    isError,
  };
};

export const useDeleteFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL });
    },
  });
};

export const useFolderMark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => toggleFolderMark(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL });
    },
  });
};
