import { Meta, StoryFn } from "@storybook/react";
import NoteFilterDropdown from "./NoteFilter";

export default {
  title: "Components/dropdown/NoteFilter",
  component: NoteFilterDropdown,
} as Meta<typeof NoteFilterDropdown>;

const Template: StoryFn<typeof NoteFilterDropdown> = (args) => <NoteFilterDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelect: () => {},
};
