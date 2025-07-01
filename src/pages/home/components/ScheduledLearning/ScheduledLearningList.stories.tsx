import { Meta, StoryFn } from "@storybook/react";
import ScheduledLearningList from "./ScheduledLearningList";

export default {
  title: "Home/Components/ScheduledLearningList",
  component: ScheduledLearningList,
  decorators: [(Story) => <Story />],
  argTypes: {
    items: {
      control: { type: "object" },
      description: "학습 예정 아이템 리스트",
    },
  },
} as Meta<typeof ScheduledLearningList>;

const Template: StoryFn<typeof ScheduledLearningList> = (args) => <ScheduledLearningList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      noteid: 1,
      name: "1차시 동물과 사람 사진 보고 구분하기",
      folderId: 1,
      folderName: "휴먼미디어인터랙션개론휴먼미디어인터랙션개론",
      folderColor: "blue",
      completedCards: 3,
      timeReachedCards: 10,
    },
    {
      noteid: 2,
      name: "3차시",
      folderId: 2,
      folderName: "토익",
      folderColor: "sage",
      completedCards: 8,
      timeReachedCards: 15,
    },
    {
      noteid: 3,
      name: "1차시 동물과 사람 사진 보고 구분하기",
      folderId: 2,
      folderName: "휴먼미디어인터랙션개론휴먼미디어인터랙션개론",
      folderColor: "orange",
      completedCards: 18,
      timeReachedCards: 20,
    },
  ],
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [
    {
      noteid: 1,
      name: "1차시 동물과 사람 사진 보고 구분하기",
      folderId: 1,
      folderName: "휴먼미디어인터랙션개론휴먼미디어인터랙션개론",
      folderColor: "blue",
      completedCards: 3,
      timeReachedCards: 10,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
