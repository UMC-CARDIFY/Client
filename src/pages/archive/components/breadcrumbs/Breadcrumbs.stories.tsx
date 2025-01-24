import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Archive/Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    username: {
      control: { type: "text" },
      description: "사용자 이름",
    },
    pathSegments: {
      control: { type: "object" },
      description: "현재 경로를 나타내는 문자열 배열",
    },
  },
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "혜성",
  pathSegments: ["프로젝트"],
};

export const PathSegments = Template.bind({});
PathSegments.args = {
  username: "혜성",
  pathSegments: ["카디파이", "프론트엔드"],
};
