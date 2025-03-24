import FolderFilter from "@components/common/dropdown/FolderFilter";
import Sort from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import { mapToMainFolderProps } from "@utils/folder-mapper";
import MainFolderList from "../components/MainFolderList/MainFolderList";
import { useFolderList } from "../hooks/use-folder-list";

const handleSortSelect = (value: string) => {
  console.log("Sort selected:", value);
};

const handleFolderFilterSelect = (colors: string[]) => {
  console.log("Filter selected:", colors);
};

export const Archive = () => {
  const { foldersList, isLoading, isError } = useFolderList();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다</div>;
  }

  const transformedFolders = foldersList.map(mapToMainFolderProps);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-10 flex flex-col">
        <Text variant="heading2">사용자의 아카이브</Text>

        <div className="mt-10 flex gap-2 z-10">
          <Sort onSelect={handleSortSelect} />
          <FolderFilter onSelect={handleFolderFilterSelect} />
        </div>

        <div className="flex mt-8">
          <MainFolderList folders={transformedFolders} variant="archive" />
        </div>
      </div>
    </div>
  );
};
