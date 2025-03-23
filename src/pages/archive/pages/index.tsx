import MainFolderList from "@components/common/MainFolderList/MainFolderList";
import FolderFilter from "@components/common/dropdown/FolderFilter";
import Sort from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import FolderItemData from "src/mocks/FolderItemData";

const handleSortSelect = (value: string) => {
  console.log("Sort selected:", value);
};

const handleFolderFilterSelect = (colors: string[]) => {
  console.log("Filter selected:", colors);
};

export const Archive = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-10 flex flex-col">
        <Text variant={"heading2"}>사용자의 아카이브</Text>

        {/* SortDropdown + FolderFilterDropdown */}
        <div className="mt-10 flex gap-2 z-10">
          <Sort onSelect={handleSortSelect} />
          <FolderFilter onSelect={handleFolderFilterSelect} />
        </div>

        {/* FolderList */}
        <div className="flex mt-8">
          <MainFolderList folders={FolderItemData} variant="archive" containerClassName="w-[50rem]" />
        </div>
      </div>
    </div>
  );
};
