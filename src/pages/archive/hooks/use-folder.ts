import { patchFolders, postFolders } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateFolderRequest, UpdateFolderRequest } from "@typedefs/folder/folder-request";

export const usePatchFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ folderId, body }: { folderId: number; body: UpdateFolderRequest }) => patchFolders(folderId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

export const usePostFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateFolderRequest) => postFolders(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};
