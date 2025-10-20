import { Meta, StoryFn } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Archive/Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: { type: "object" },
      description: "크럼 아이템 배열 (label / to?)",
    },
  },
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [{ label: "홈", to: "/" }, { label: "프로젝트" }],
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  items: [{ label: "홈", to: "/" }, { label: "카디파이", to: "/projects/cardify" }, { label: "프론트엔드" }],
};
