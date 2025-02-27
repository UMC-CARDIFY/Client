import { Meta, StoryFn } from "@storybook/react";
import EmptyState from "./EmptyState";

export default {
  title: "Archive/Components/EmptyState",
  component: EmptyState,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["folder", "note"],
    },
  },
} satisfies Meta<typeof EmptyState>;

const Template: StoryFn<typeof EmptyState> = (args) => <EmptyState {...args} />;

export const NoteEmptyState = Template.bind({});
NoteEmptyState.args = {
  type: "note",
};

export const FolderEmptyState = Template.bind({});
FolderEmptyState.args = {
  type: "folder",
};
