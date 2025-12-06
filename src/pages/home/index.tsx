import { Text } from "@components/typography/Text";
import useAccessTokenFromUrl from "@hooks/use-access-token-from-url";
import MainFolderList from "@pages/archive/components/MainFolderList/MainFolderList";
import RecentMarkedNoteList from "./components/RecentMarkedNote/RecentMarkedNoteList";
import ScheduledLearningList from "./components/ScheduledLearning/ScheduledLearningList";
import { useRecentMarkedFolders, useRecentMarkedNotes, useScheduledLearningItems } from "./hooks/use-home-data";

const Home = () => {
  useAccessTokenFromUrl();

  const folders = useRecentMarkedFolders();
  const notes = useRecentMarkedNotes();
  const scheduledItems = useScheduledLearningItems();

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
