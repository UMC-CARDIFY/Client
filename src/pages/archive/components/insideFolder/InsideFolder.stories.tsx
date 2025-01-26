import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import InsideFolder from "./InsideFolder";

export default {
  title: "Archive/Components/InsideFolder",
  component: InsideFolder,
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
} as Meta<typeof InsideFolder>;

const Template: StoryFn<typeof InsideFolder> = (args) => <InsideFolder {...args} />;

export const Default = Template.bind({});
Default.args = {
  folderName: "1강 빈칸 채우기",
  color: "sage",
};

export const LongNameFolder = Template.bind({});
LongNameFolder.args = {
  folderName: "긴폴더이름긴폴더이름",
  color: "sage",
};
