import MainFolderList from "@components/common/MainFolderList/MainFolderList";
import MainNoteList from "@components/common/MainNoteList/MainNoteList";
import { Text } from "@components/typography/Text";
import { mockRecentMarkedNotes } from "@mocks/MockRecentMarkedNotes";
import { mockScheduledLearningItems } from "@mocks/MockScheduledLearningItems";
import FolderItemData from "src/mocks/FolderItemData";
import ScheduledLearningList from "./components/ScheduledLearning/ScheduledLearningList";

export const Home = () => {
  const RecentMarkedNoteList = MainNoteList;

  const folderList = FolderItemData.map((folder) => ({
    ...folder,
    id: folder.folderId,
  }));

  return (
    <div className="w-[800px] mx-auto pb-20 text-base-black">
      <Text variant={"heading2"} className="mt-10">
        홈
      </Text>

      <Text variant={"sub_heading1"} className="mt-10 mb-6 block">
        예정된 학습
      </Text>
      <ScheduledLearningList items={mockScheduledLearningItems} />

      <Text variant={"sub_heading1"} className="mt-14 mb-6 block">
        최근 즐겨찾기 한 폴더
      </Text>
      <MainFolderList variant="home" maxItems={4} folders={folderList} />

      <Text variant={"sub_heading1"} className="mt-12 mb-6 block">
        최근 즐겨찾기 한 노트
      </Text>
      <RecentMarkedNoteList items={mockRecentMarkedNotes} maxItems={3} variant="home" layout="row" />
    </div>
  );
};
