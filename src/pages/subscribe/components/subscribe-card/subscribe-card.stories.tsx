import type { Meta, StoryObj } from "@storybook/react";
import { SubscribeCard } from "./subscribe-card";

const meta: Meta<typeof SubscribeCard> = {
  title: "Subscribe/subscribe-card",
  component: SubscribeCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "구독 요금제를 표시하는 카드 컴포넌트입니다. FREE와 PRO 타입을 지원합니다.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["free", "pro"],
      description: "구독 카드 타입",
      defaultValue: "free",
    },
    userSubscription: {
      control: "select",
      options: ["free", "pro"],
      description: "현재 사용자 구독 상태",
      defaultValue: "free",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Free: Story = {
  args: {
    type: "free",
    userSubscription: "free",
  },
};

export const Pro: Story = {
  args: {
    type: "pro",
    userSubscription: "free",
  },
};
