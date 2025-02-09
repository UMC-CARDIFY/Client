import { Meta, StoryFn } from "@storybook/react";
import KebabDropdown from "./Kebab";

export default {
  title: "Components/dropdown/Kebab",
  component: KebabDropdown,
} as Meta<typeof KebabDropdown>;

const Template: StoryFn<typeof KebabDropdown> = (args) => <KebabDropdown {...args} />;

export const ParentFolderKebab = Template.bind({});
ParentFolderKebab.args = {
  onSelect: () => {},
};

export const SubFolderKebab = Template.bind({});
SubFolderKebab.args = {
  withFolderMove: true,
  onSelect: () => {},
};
