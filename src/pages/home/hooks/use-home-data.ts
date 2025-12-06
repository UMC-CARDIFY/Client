import { CARD_QUERY_OPTION } from "@apis/card/card-queries";
import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { NOTE_QUERY_OPTION } from "@apis/note/note-queries";
import { MainFolderProps } from "@pages/archive/components/MainFolderList/MainFolderList";
import { useQuery } from "@tanstack/react-query";
import { NoteItemProps, RecentMarkedFolder, RecentMarkedNote, ScheduledLearningItemProps, StudyCard } from "@typedefs";

const mapToMainFolderProps = (folder: RecentMarkedFolder): MainFolderProps => ({
  folderId: folder.folderId,
  folderName: folder.name,
  folderColor: folder.color,
  noteCount: folder.noteCount,
  markState: folder.markState === "ACTIVE",
  createdAt: folder.markDate,
});

const mapToNoteItemProps = (note: RecentMarkedNote): NoteItemProps => ({
  noteId: note.noteId,
  name: note.name,
  folderId: note.folderId,
  folderName: note.folderName,
  folderColor: note.folderColor,
  flashCardCount: note.flashCardCount,
  markState: note.markState,
  viewAt: null,
  editDate: note.markAt,
  createdAt: note.markAt,
  isDownload: false,
  isUpload: false,
  content: note.noteContentPreview ?? undefined,
});

const mapToScheduledLearningProps = (card: StudyCard): ScheduledLearningItemProps => ({
  noteid: card.studyCardSetId,
  name: card.noteName,
  folderId: 0,
  folderName: card.folderName,
  folderColor: card.color,
  completedCards: card.studyStatus,
  timeReachedCards: 5,
});

export const useRecentMarkedFolders = () => {
  const { data = [] } = useQuery(FOLDER_QUERY_OPTION.RECENT_MARKED());
  return data.map(mapToMainFolderProps);
};

export const useRecentMarkedNotes = () => {
  const { data = [] } = useQuery(NOTE_QUERY_OPTION.RECENT_MARKED());
  return data.map(mapToNoteItemProps);
};

export const useScheduledLearningItems = () => {
  const { data = [] } = useQuery(CARD_QUERY_OPTION.LIST({ order: "edit-newest" }));
  return data.slice(0, 3).map(mapToScheduledLearningProps);
};
