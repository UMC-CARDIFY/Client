import { deleteNote, toggleNoteMark } from "@apis/note/note";
import { NOTE_QUERY_KEY, NOTE_QUERY_OPTION } from "@apis/note/note-queries";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DeleteNoteRequest,
  DeleteNoteResponse,
  FetchNoteListParams,
  NoteListResponse,
  ToggleNoteMarkRequest,
  ToggleNoteMarkResponse,
} from "@typedefs";

// 노트 리스트 조회
export const useNoteList = (params?: FetchNoteListParams) => {
  const { data, isLoading, isError } = useQuery(NOTE_QUERY_OPTION.LIST(params));

  return {
    noteList: data?.noteList ?? [],
    isLoading,
    isError,
  };
};

// 노트 즐겨찾기
export const useNoteMark = () => {
  const queryClient = useQueryClient();

  return useMutation<ToggleNoteMarkResponse, Error, ToggleNoteMarkRequest>({
    mutationFn: toggleNoteMark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTE_QUERY_KEY.ALL() });
    },
  });
};

// 노트 삭제
export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteNoteResponse, Error, DeleteNoteRequest>({
    mutationFn: deleteNote,
    onSuccess: (_res, { noteId }) => {
      const entries = queryClient.getQueriesData<NoteListResponse>({
        queryKey: NOTE_QUERY_KEY.ALL(),
      });

      entries.forEach(([key, data]) => {
        if (!Array.isArray(key) || key[0] !== "notes" || key[1] !== "list" || !data) return;

        queryClient.setQueryData<NoteListResponse>(key, {
          ...data,
          noteList: data.noteList.filter((n) => n.noteId !== noteId),
          totalElements: Math.max(0, data.totalElements - 1),
          listsize: Math.max(0, data.listsize - 1),
        });
      });

      queryClient.invalidateQueries({ queryKey: ["notes", "list"] });
    },
  });
};
