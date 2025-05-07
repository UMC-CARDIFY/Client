import { deleteFolder } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { toggleFolderMark } from "@apis/folder/folder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: FOLDER_QUERY_KEY.ALL,
      });
    },
  });
};

export const useFolderMark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => toggleFolderMark(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: FOLDER_QUERY_KEY.ALL,
      });
    },
  });
};
