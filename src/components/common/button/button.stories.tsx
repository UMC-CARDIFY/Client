import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["SIZE", "NORMAL", "STROKE", "FILL", "SMALL", "LONG"],
    },
    size: {
      control: "select",
      options: ["XS", "S", "M", "L", "XL", "UNKNOWN"],
    },
    color: {
      control: "select",
      options: ["SKYBLUE", "BLUE"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    variant: "NORMAL",
    children: "Normal Button",
  },
};

export const Stroke: Story = {
  args: {
    variant: "STROKE",
    children: "Stroke Button",
  },
};

export const Fill: Story = {
  args: {
    variant: "FILL",
    children: "Fill Button",
  },
};

export const Small: Story = {
  args: {
    variant: "SMALL",
    children: "Small Button",
  },
};

export const LongSkyblue: Story = {
  args: {
    variant: "LONG",
    color: "SKYBLUE",
    children: "Long Skyblue Button",
  },
};

export const LongBlue: Story = {
  args: {
    variant: "LONG",
    color: "BLUE",
    children: "Long Blue Button",
  },
};

export const SizeXS: Story = {
  args: {
    variant: "SIZE",
    size: "XS",
    children: "xs",
  },
};

export const SizeS: Story = {
  args: {
    variant: "SIZE",
    size: "S",
    children: "s",
  },
};

export const SizeM: Story = {
  args: {
    variant: "SIZE",
    size: "M",
    children: "m",
  },
};

export const SizeL: Story = {
  args: {
    variant: "SIZE",
    size: "L",
    children: "l",
  },
};

export const SizeXL: Story = {
  args: {
    variant: "SIZE",
    size: "XL",
    children: "xl",
  },
};
