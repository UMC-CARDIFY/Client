import { PostFoldersBody, postFolders } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY } from "@apis/folder/folder-queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: PostFoldersBody) => postFolders(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};
