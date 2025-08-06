import { deleteFolder, patchFolders, postFolders, postSubFolder, toggleFolderMark } from "@apis/folder/folder";
import { FOLDER_QUERY_KEY, FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateFolderRequest, FetchFoldersParams, UpdateFolderRequest } from "@typedefs";

/** 폴더 리스트 조회 */
export const useFolderList = (params?: FetchFoldersParams) => {
  const { data, isLoading, isError } = useQuery(FOLDER_QUERY_OPTION.LIST(params));

  return {
    foldersList: data?.foldersList ?? [],
    folderId: data?.parentFolderId ?? 0,
    folderTitle: data?.parentFolderName ?? "",
    folderColor: data?.parentFolderColor ?? "gray",
    folderMarkState: data?.parentMarkState ?? "INACTIVE", // 기본값은 비활성화
    isLoading,
    isError,
  };
};

/** 폴더 생성 */
export const usePostFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateFolderRequest) => postFolders(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

/** 폴더 수정 */
export const usePatchFolders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      folderId,
      body,
    }: {
      folderId: number;
      body: UpdateFolderRequest;
    }) => patchFolders(folderId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

/** 폴더 삭제 */
export const useDeleteFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

/** 폴더 즐겨찾기 토글 */
export const useFolderMark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (folderId: number) => toggleFolderMark(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};

/** 하위 폴더 생성 */
export const usePostSubFolder = (parentFolderId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: { name: string }) => postSubFolder(parentFolderId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FOLDER_QUERY_KEY.ALL() });
    },
  });
};
