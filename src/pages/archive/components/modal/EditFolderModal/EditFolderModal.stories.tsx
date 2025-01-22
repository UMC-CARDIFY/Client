import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { EditFolderModal } from "./EditFolderModal";

export default {
  title: "Archive/Modals/EditFolderModal",
  component: EditFolderModal,
} as Meta<typeof EditFolderModal>;

const Template: StoryFn<typeof EditFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        폴더 수정 모달 열기
      </button>
      <EditFolderModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(folderName: string, folderColor: string) => {
          alert(`Folder edited: ${folderName}, Color: ${folderColor}`);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
