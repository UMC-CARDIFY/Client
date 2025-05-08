import { Meta, StoryFn } from "@storybook/react";
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
    { folderId: 1, folderName: "1강 빈칸 채우기", color: "sage" },
    { folderId: 2, folderName: "2강 빈칸 채우기", color: "sage" },
    { folderId: 3, folderName: "3강 빈칸 채우기", color: "sage" },
  ],
};

export const ManyFolders = Template.bind({});
ManyFolders.args = {
  folders: [
    { folderId: 1, folderName: "1강 빈칸 채우기", color: "sage" },
    { folderId: 2, folderName: "2강 빈칸 채우기", color: "sage" },
    { folderId: 3, folderName: "3강 빈칸 채우기", color: "sage" },
    { folderId: 4, folderName: "4강 빈칸 채우기", color: "sage" },
    { folderId: 5, folderName: "5강 빈칸 채우기", color: "sage" },
    { folderId: 6, folderName: "6강 빈칸 채우기", color: "sage" },
    { folderId: 7, folderName: "긴폴더이름긴폴더이름", color: "sage" },
    { folderId: 8, folderName: "긴폴더이름긴폴더이름", color: "sage" },
  ],
};
