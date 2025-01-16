import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
