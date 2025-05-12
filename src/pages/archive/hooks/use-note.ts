import { fetchNoteList } from "@apis/note/note";
import { NOTE_QUERY_KEY } from "@apis/note/note-queries";
import { useQuery } from "@tanstack/react-query";
import { NoteItemProps } from "@typedefs/note";
import { NoteItem } from "@typedefs/note-response";

interface UseNoteListParams {
  folderId?: number;
  order?: string;
  color?: string;
  page?: number;
  size?: number;
}

const mapNoteItemToProps = (note: NoteItem): NoteItemProps => ({
  ...note,
  markState: note.markState === "ACTIVE",
  content: "", // default
});

export const useNoteList = (params?: UseNoteListParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: NOTE_QUERY_KEY.LIST(params),
    queryFn: () => fetchNoteList(params),
  });

  const noteList = data?.noteList.map(mapNoteItemToProps) ?? [];

  return {
    noteList,
    isLoading,
    isError,
  };
};
