import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Chip 컴포넌트",
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "텍스트 내용",
      defaultValue: "텍스트",
    },
    className: {
      control: "text",
      description: "추가 스타일링을 위한 CSS 클래스",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "텍스트",
  },
};
