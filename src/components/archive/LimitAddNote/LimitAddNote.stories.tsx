import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { LimitAddNote } from "./LimitAddNote";

export default {
  title: "Archive/LimitAddNote",
  component: LimitAddNote,
} as Meta<typeof LimitAddNote>;

const Template: StoryFn<typeof LimitAddNote> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        노트 추가 제한 모달 열기
      </button>

      <LimitAddNote
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onPay={() => alert("결제하기 버튼 클릭됨")}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
