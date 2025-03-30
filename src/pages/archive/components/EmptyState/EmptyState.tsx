import { Text } from "@components/typography/Text";
import { NewFolderIcon } from "@svgs/index";
import { useState } from "react";
import { AddFolderModal } from "../modal/AddFolderModal/AddFolderModal";

interface EmptyStateProps {
  type: "note" | "folder";
}

const EMPTY_STATE_MESSAGES = {
  note: {
    title: "아직 작성한 노트가 없습니다.",
    description: "새로운 노트를 추가하고 학습을 시작하세요.",
  },
  folder: {
    title: "아직 생성된 폴더가 없습니다.",
    description: "새로운 폴더를 추가하고 학습을 시작하세요.",
  },
} as const;

const EmptyState: React.FC<EmptyStateProps> = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const messages = EMPTY_STATE_MESSAGES[type];

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center text-gray-500">
      <NewFolderIcon className="w-12 h-12 mb-2" />
      <div className="flex flex-col items-center gap-1">
        <Text variant="sub_heading2">{messages.title}</Text>
        <Text variant="body3">{messages.description}</Text>
      </div>
      {type === "folder" ? (
        <button
          type="button"
          className="px-4 py-1 bg-brand-50 hover:bg-brand-100 rounded-lg mt-4"
          onClick={handleClick}
        >
          <Text variant="sub_heading2" className="text-brand-original">
            폴더 추가하기
          </Text>
        </button>
      ) : null}
      {isModalOpen && <AddFolderModal onClose={handleCloseModal} />}
    </div>
  );
};

export default EmptyState;
