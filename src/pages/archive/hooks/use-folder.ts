import { FolderData, patchFolders, postFolders } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePatchFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ folderId, body }: { folderId: number; body: FolderData }) => patchFolders(folderId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

export const usePostFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: FolderData) => postFolders(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};
