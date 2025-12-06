import { FOLDER_QUERY_OPTION } from "@apis/folder/folder-queries";
import { Text } from "@components/typography/Text";
import useAccessTokenFromUrl from "@hooks/use-access-token-from-url";
import { mockRecentMarkedNotes } from "@mocks/mock-recent-marked-notes";
import { mockScheduledLearningItems } from "@mocks/mock-scheduled-learning-items";
import { MainFolderProps } from "@pages/archive/components/MainFolderList/MainFolderList";
import MainFolderList from "@pages/archive/components/MainFolderList/MainFolderList";
import { useQuery } from "@tanstack/react-query";
import { RecentMarkedFolder } from "@typedefs";
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

const Home = () => {
  useAccessTokenFromUrl();

  const { data: recentMarkedFolders = [] } = useQuery(FOLDER_QUERY_OPTION.RECENT_MARKED());

  const folders = recentMarkedFolders.map(mapToMainFolderProps);

  return (
    <div className="w-[50rem] mx-auto pb-20 text-base-black">
      <Text variant="sub_heading1" className="mt-10">
        홈
      </Text>

      <Text variant="sub_heading2" className="mt-10 mb-6 block">
        지금 학습하기
      </Text>
      <ScheduledLearningList items={mockScheduledLearningItems} />

      <Text variant="sub_heading2" className="mt-14 mb-6 block">
        최근 즐겨찾기 한 폴더
      </Text>
      <MainFolderList folders={folders} variant="home" maxItems={4} />

      <Text variant="sub_heading2" className="mt-12 mb-6 block">
        최근 즐겨찾기 한 노트
      </Text>
      <RecentMarkedNoteList items={mockRecentMarkedNotes} />
    </div>
  );
};

export default Home;
