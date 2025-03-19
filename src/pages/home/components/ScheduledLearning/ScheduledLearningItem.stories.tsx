import { Meta, StoryFn } from "@storybook/react";
import ScheduledLearningItem from "./ScheduledLearningItem";

export default {
  title: "Home/Components/ScheduledLearningItem",
  component: ScheduledLearningItem,
  argTypes: {
    name: {
      control: { type: "text" },
      description: "노트 이름",
    },
    folderName: {
      control: { type: "text" },
      description: "폴더 이름",
    },
    folderColor: {
      control: { type: "text" },
      description: "폴더 색상",
    },
    completedCards: {
      control: { type: "number" },
      description: "학습 완료한 카드 수",
    },
    timeReachedCards: {
      control: { type: "number" },
      description: "학습 시간에 도달한 카드 수",
    },
  },
} as Meta<typeof ScheduledLearningItem>;

const Template: StoryFn<typeof ScheduledLearningItem> = (args) => <ScheduledLearningItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "1차시 동물과 사람 사진 보고 구분하기",
  folderName: "휴먼미디어인터랙션개론휴먼미디어인터랙션개론",
  folderColor: "blue",
  completedCards: 3,
  timeReachedCards: 10,
};
