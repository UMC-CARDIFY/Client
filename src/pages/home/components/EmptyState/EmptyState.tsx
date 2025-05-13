import { Text } from "@components/typography/Text";
import { PATHS } from "@constants/paths";
import React from "react";
import { useNavigate } from "react-router-dom";

type EmptyStateType = "scheduledLearning" | "favoriteFolder" | "favoriteNote";

interface EmptyStateProps {
  type: EmptyStateType;
}

const EMPTY_STATE_CONFIG = {
  scheduledLearning: {
    message: "아직 예정된 플래시 카드 학습이 없습니다.",
    buttonText: "내 플래시 카드로 이동하기",
    path: PATHS.FLASHCARD,
  },
  favoriteFolder: {
    message: "아직 즐겨찾기 한 폴더가 없습니다.\n아카이브에서 폴더 즐겨찾기를 설정해 보세요.",
    buttonText: "내 아카이브로 이동하기",
    path: PATHS.ARCHIVE,
  },
  favoriteNote: {
    message: "아직 즐겨찾기 한 노트가 없습니다.\n아카이브에서 노트 즐겨찾기를 설정해 보세요.",
    buttonText: "내 아카이브로 이동하기",
    path: PATHS.ARCHIVE,
  },
} as const;

const EmptyState: React.FC<EmptyStateProps> = ({ type }) => {
  const navigate = useNavigate();
  const { message, buttonText, path } = EMPTY_STATE_CONFIG[type];

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="w-fit flex flex-col gap-6">
      <Text variant="sub_heading2" className="text-gray-500 whitespace-pre-line">
        {message}
      </Text>
      <button
        onClick={handleClick}
        className="w-fit px-5 py-[0.375rem] rounded-lg text-brand-700 bg-brand-50 hover:bg-brand-100"
      >
        <Text variant="sub_heading2">{buttonText}</Text>
      </button>
    </div>
  );
};

export default EmptyState;
