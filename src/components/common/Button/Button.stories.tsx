import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["SIZE", "NORMAL", "STORKE", "FILL", "SMALL"],
    },
    size: {
      control: "select",
      options: ["XS", "S", "M", "L", "XL", "UNKNOWN"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: "NORMAL",
  children: "Normal Button",
};

export const Storke = Template.bind({});
Storke.args = {
  variant: "STROKE",
  children: "Storke Button",
};

export const Fill = Template.bind({});
Fill.args = {
  variant: "FILL",
  children: "Fill Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "SMALL",
  children: "Small Button",
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  variant: "SIZE",
  size: "XS",
  children: "xs",
};

export const SizeS = Template.bind({});
SizeS.args = {
  variant: "SIZE",
  size: "S",
  children: "s",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  variant: "SIZE",
  size: "M",
  children: "m",
};
