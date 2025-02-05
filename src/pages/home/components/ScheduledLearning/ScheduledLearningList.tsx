import React from "react";
import ScheduledLearningItem from "./ScheduledLearningItem";

interface ScheduledLearningItemProps {
  noteid: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  completedCards: number; // 학습 완료한 카드 수
  timeReachedCards: number; // 학습 시간에 도달한 카드 수
}

interface ScheduledLearningListProps {
  items?: ScheduledLearningItemProps[];
}

const ScheduledLearningList: React.FC<ScheduledLearningListProps> = ({
  items = [],
}) => {
  if (!items.length) {
    return (
      <div className="flex flex-col w-[52rem] h-60 items-center justify-center text-gray-400">
        예정된 학습이 없습니다.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row gap-4">
      {items.map((item) => (
        <ScheduledLearningItem key={item.noteid} {...item} />
      ))}
    </div>
  );
};

export default ScheduledLearningList;
