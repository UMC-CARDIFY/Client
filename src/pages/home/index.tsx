import { CARD_QUERY_OPTION } from "@apis/card/card-queries";
import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { NOTE_QUERY_OPTION } from "@apis/note/note-queries";
import { Text } from "@components/typography/Text";
import useAccessTokenFromUrl from "@hooks/use-access-token-from-url";
import { MainFolderProps } from "@pages/archive/components/MainFolderList/MainFolderList";
import MainFolderList from "@pages/archive/components/MainFolderList/MainFolderList";
import { useQuery } from "@tanstack/react-query";
import { NoteItemProps, RecentMarkedFolder, RecentMarkedNote, ScheduledLearningItemProps, StudyCard } from "@typedefs";
import RecentMarkedNoteList from "./components/RecentMarkedNote/RecentMarkedNoteList";
import ScheduledLearningList from "./components/ScheduledLearning/ScheduledLearningList";

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

const Home = () => {
  useAccessTokenFromUrl();

  const { data: recentMarkedFolders = [] } = useQuery(FOLDER_QUERY_OPTION.RECENT_MARKED());
  const { data: recentMarkedNotes = [] } = useQuery(NOTE_QUERY_OPTION.RECENT_MARKED());
  const { data: studyCards = [] } = useQuery(CARD_QUERY_OPTION.LIST({ order: "edit-newest" }));

  const folders = recentMarkedFolders.map(mapToMainFolderProps);
  const notes = recentMarkedNotes.map(mapToNoteItemProps);
  const scheduledItems = studyCards.slice(0, 3).map(mapToScheduledLearningProps);

  return (
    <div className="w-[50rem] mx-auto pb-20 text-base-black">
      <Text variant="sub_heading1" className="mt-10">
        홈
      </Text>

      <Text variant="sub_heading2" className="mt-10 mb-6 block">
        지금 학습하기
      </Text>
      <ScheduledLearningList items={scheduledItems} />

      <Text variant="sub_heading2" className="mt-14 mb-6 block">
        최근 즐겨찾기 한 폴더
      </Text>
      <MainFolderList folders={folders} variant="home" maxItems={4} />

      <Text variant="sub_heading2" className="mt-12 mb-6 block">
        최근 즐겨찾기 한 노트
      </Text>
      <RecentMarkedNoteList items={notes} />
    </div>
  );
};

export default Home;
