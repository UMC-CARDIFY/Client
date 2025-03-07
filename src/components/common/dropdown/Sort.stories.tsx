import { Meta, StoryFn } from "@storybook/react";
import SortDropdown from "./Sort";

export default {
  title: "Components/dropdown/Sort",
  component: SortDropdown,
} as Meta<typeof SortDropdown>;

const Template: StoryFn<typeof SortDropdown> = (args) => <SortDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSelect: () => {},
};
