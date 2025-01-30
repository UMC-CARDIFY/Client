import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import * as InsideFolderStories from "../insideFolder/InsideFolder.stories";
import InsideFolderList from "./InsideFolderList";

export default {
  title: "Archive/Components/InsideFolderList",
  component: InsideFolderList,
  args: {
    ...InsideFolderStories.Default.args,
  },
} as Meta<typeof InsideFolderList>;

const Template: StoryFn<typeof InsideFolderList> = (args) => <InsideFolderList {...args} />;

export const Default = Template.bind({});
Default.args = {
  folders: [
    { id: 1, ...InsideFolderStories.Default.args },
    { id: 2, ...InsideFolderStories.Default.args },
    { id: 3, ...InsideFolderStories.LongNameFolder.args },
  ],
};

export const ManyFolders = Template.bind({});
ManyFolders.args = {
  folders: [
    { id: 1, ...InsideFolderStories.Default.args },
    { id: 2, ...InsideFolderStories.Default.args },
    { id: 3, ...InsideFolderStories.Default.args },
    { id: 4, ...InsideFolderStories.Default.args },
    { id: 5, ...InsideFolderStories.Default.args },
    { id: 6, ...InsideFolderStories.LongNameFolder.args },
    { id: 7, ...InsideFolderStories.LongNameFolder.args },
    { id: 8, ...InsideFolderStories.Default.args },
  ],
};
