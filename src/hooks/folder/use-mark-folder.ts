import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { toggleFolderMark } from "@apis/folder/mark-folder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
