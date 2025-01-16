import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import NewFolder from "./NewFolder";

export default {
  title: "Archive/Components/NewFolder",
  component: NewFolder,
  argTypes: {},
} as Meta<typeof NewFolder>;

const Template: StoryFn<typeof NewFolder> = () => <NewFolder />;

export const Default = Template.bind({});
Default.args = {};
