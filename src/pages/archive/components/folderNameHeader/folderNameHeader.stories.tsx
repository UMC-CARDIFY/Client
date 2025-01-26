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
  },
} as Meta<typeof FolderNameHeader>;

const Template: StoryFn<typeof FolderNameHeader> = (args) => <FolderNameHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  folderName: "INSIDE ENGLISH 4",
  color: "sage",
};
