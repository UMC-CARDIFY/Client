import { toggleNoteMark } from "@apis/note/note";
import { NOTE_QUERY_KEY, NOTE_QUERY_OPTION } from "@apis/note/note-queries";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FetchNoteListParams, ToggleNoteMarkRequest, ToggleNoteMarkResponse } from "@typedefs";

/** ✅ 노트 리스트 조회 */
export const useNoteList = (params?: FetchNoteListParams) => {
  const { data, isLoading, isError } = useQuery(NOTE_QUERY_OPTION.LIST(params));

  return {
    noteList: data?.noteList ?? [],
    isLoading,
    isError,
  };
};

/** 노트 즐겨찾기 토글 */
export const useNoteMark = () => {
  const queryClient = useQueryClient();

  return useMutation<ToggleNoteMarkResponse, Error, ToggleNoteMarkRequest>({
    mutationFn: toggleNoteMark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY.ALL() });
    },
  });
};
