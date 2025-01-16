import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { EditSubFolderModal } from "./EditSubFolderModal";

export default {
  title: "Archive/EditSubFolderModal",
  component: EditSubFolderModal,
} as Meta<typeof EditSubFolderModal>;

const Template: StoryFn<typeof EditSubFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        하위 폴더 수정 모달 열기
      </button>
      <EditSubFolderModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(folderName) => alert(`하위 폴더 수정됨: ${folderName}`)}
        currentFolderName="기존 폴더 이름"
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
