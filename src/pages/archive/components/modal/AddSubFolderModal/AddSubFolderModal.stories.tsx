import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { AddSubFolderModal } from "./AddSubFolderModal";

export default {
  title: "Archive/AddSubFolderModal",
  component: AddSubFolderModal,
} as Meta<typeof AddSubFolderModal>;

const Template: StoryFn<typeof AddSubFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        하위 폴더 추가 모달 열기
      </button>
      <AddSubFolderModal
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
