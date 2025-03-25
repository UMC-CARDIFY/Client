import { Meta, StoryFn } from "@storybook/react";
import Archive from "./index";

export default {
  title: "Archive/pages/Archive",
  component: Archive,
} as Meta<typeof Archive>;

const Template: StoryFn<typeof Archive> = () => <Archive />;

export const Default = Template.bind({});
Default.args = {};
