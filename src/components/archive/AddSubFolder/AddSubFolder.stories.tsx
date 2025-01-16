import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { AddSubFolder } from "./AddSubFolder";

export default {
  title: "Archive/AddSubFolder",
  component: AddSubFolder,
} as Meta<typeof AddSubFolder>;

const Template: StoryFn<typeof AddSubFolder> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        하위 폴더 추가 모달 열기
      </button>
      <AddSubFolder
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(folderName) => alert(`하위 폴더 추가됨: ${folderName}`)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
