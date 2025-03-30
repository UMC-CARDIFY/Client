import { deleteFolder } from "@apis/folder/delete-folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
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
