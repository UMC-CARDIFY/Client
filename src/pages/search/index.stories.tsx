import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Search } from "./index";

export default {
  title: "Home/Pages/SearchPage",
  component: Search,
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
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = () => <Search />;

export const Default = Template.bind({});
