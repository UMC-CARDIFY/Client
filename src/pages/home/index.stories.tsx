import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./index";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof Home>;

const Template: StoryFn<typeof Home> = () => <Home />;

export const Default = Template.bind({});
