import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./index";

export default {
  title: "Home/Pages/HomePage",
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
