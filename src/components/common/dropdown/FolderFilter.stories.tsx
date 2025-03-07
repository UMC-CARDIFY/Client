import { Meta, StoryFn } from "@storybook/react";
import FolderFilter from "./FolderFilter";

export default {
  title: "Components/dropdown/FolderFilter",
  component: FolderFilter,
} as Meta<typeof FolderFilter>;

const Template: StoryFn<typeof FolderFilter> = (args) => <FolderFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelect: () => {},
};
