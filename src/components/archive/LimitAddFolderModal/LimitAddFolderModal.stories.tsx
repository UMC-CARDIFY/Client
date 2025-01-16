import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { LimitAddFolderModal } from "./LimitAddFolderModal";

export default {
  title: "Archive/LimitAddFolderModal",
  component: LimitAddFolderModal,
} as Meta<typeof LimitAddFolderModal>;

const Template: StoryFn<typeof LimitAddFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        폴더 추가 제한 모달 열기
      </button>

      <LimitAddFolderModal
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
