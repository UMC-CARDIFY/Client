import FolderFilter from "@components/common/dropdown/FolderFilter";
import Sort from "@components/common/dropdown/Sort";
import { Text } from "@components/typography/Text";
import { mapToMainFolderProps } from "@utils/folder-mapper";
import { useState } from "react";
import EmptyState from "../components/EmptyState/EmptyState";
import MainFolderList from "../components/MainFolderList/MainFolderList";
import { LimitAddFolderModal } from "../components/modal/LimitAddFolderModal/LimitAddFolderModal";
import NewFolderMain from "../components/new-folder/NewFolderMain";
import { useFolderList } from "../hooks/use-archive-folder";

const Archive = () => {
  const [order, setOrder] = useState("edit-newest");
  const [colors, setColors] = useState<string[]>([]);
  const [isLimitModalOpen, setIsLimitModalOpen] = useState(false);

  const { foldersList, isLoading, isError } = useFolderList({
    order,
    color: colors.join(","),
  });

  const transformedFolders = foldersList.map(mapToMainFolderProps);
  const isColorFiltered = colors.length > 0;

  // TODO: 로딩 UI 받으면 Suspense로 수정 및 에러도 에러바운더리로 리팩토링 예정
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50rem] mt-10 flex flex-col">
        <Text variant="sub_heading1">사용자의 아카이브</Text>

        <div className="mt-10 flex gap-2 z-10">
          <Sort selected={order} onSelect={setOrder} />
          <FolderFilter selected={colors} onSelect={setColors} />
        </div>

        <div className="flex mt-8">
          {transformedFolders.length === 0 ? (
            isColorFiltered ? (
              <div className="w-full">
                <NewFolderMain onLimitReached={() => setIsLimitModalOpen(true)} />
              </div>
            ) : (
              <div className="mt-[6.25rem] w-full flex justify-center">
                <EmptyState type="folder" />
              </div>
            )
          ) : (
            <MainFolderList
              folders={transformedFolders}
              variant="archive"
              onLimitReached={() => setIsLimitModalOpen(true)}
            />
          )}
        </div>

        <LimitAddFolderModal
          isOpen={isLimitModalOpen}
          onClose={() => setIsLimitModalOpen(false)}
          onPay={() => {
            setIsLimitModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default Archive;
