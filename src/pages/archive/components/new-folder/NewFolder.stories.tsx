import { Meta, StoryFn } from "@storybook/react";
import NewFolder from "./NewFolder";

export default {
  title: "Archive/Components/NewFolder",
  component: NewFolder,
  argTypes: {},
} as Meta<typeof NewFolder>;

const Template: StoryFn<typeof NewFolder> = (args) => <NewFolder {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("새 폴더 클릭됨"),
};
