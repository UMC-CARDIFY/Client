import { Meta, StoryFn } from "@storybook/react";
import FolderNameHeader from "./FolderNameHeader";

export default {
  title: "Archive/Components/FolderNameHeader",
  component: FolderNameHeader,
  argTypes: {
    folderName: {
      control: { type: "text" },
      description: "폴더 이름",
    },
    color: {
      control: { type: "text" },
      description: "폴더 색상",
    },
    markState: {
      control: "boolean",
      description: "즐겨찾기",
    },
  },
} as Meta<typeof FolderNameHeader>;

const Template: StoryFn<typeof FolderNameHeader> = (args) => <FolderNameHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  folderId: 1,
  folderName: "INSIDE ENGLISH 4",
  color: "sage",
  markState: false,
};
