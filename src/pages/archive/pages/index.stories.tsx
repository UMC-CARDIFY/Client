import { Meta, StoryFn } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Archive from "./index";

const queryClient = new QueryClient();

export default {
  title: "Archive/pages/Archive",
  component: Archive,
} as Meta<typeof Archive>;

const Template: StoryFn<typeof Archive> = () => (
  <QueryClientProvider client={queryClient}>
    <Archive />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {};
