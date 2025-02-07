import { Text } from "@components/typography/Text";
import { HomeFlashcardIcon } from "@svgs/index";
import React from "react";
import { ScheduledLearningItemProps } from "../../../../types/scheduledLearning";

const ScheduledLearningItem: React.FC<ScheduledLearningItemProps> = ({
  name,
  folderName,
  folderColor,
  completedCards,
  timeReachedCards,
}) => {
  const progressPercentage = (completedCards / timeReachedCards) * 100;

  return (
    <div
      className={`w-[16rem] h-[15rem] px-6 py-8 flex flex-col gap-2 bg-${folderColor}-100 rounded-lg cursor-pointer`}
    >
      <div className="flex flex-col flex-1 gap-2">
        <HomeFlashcardIcon className={`fill-${folderColor}-600 stroke-${folderColor}-600 shrink-0`} />
        <Text variant={"sub_heading3"} className="text-gray-500 mt-2 truncate">
          {folderName}
        </Text>
        <Text variant={"sub_heading1"} className="text-base-black truncate">
          {name}
        </Text>
        <Text variant={"heading3"} className="text-base-black">
          {timeReachedCards}개
        </Text>
      </div>
      <div className="relative w-52">
        <div className={`w-full h-2 rounded-lg bg-${folderColor}-400`} />
        <div
          className={`absolute top-0 left-0 h-2 rounded-lg bg-${folderColor}-600 transition-all duration-300`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ScheduledLearningItem;
