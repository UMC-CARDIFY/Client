import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { AddFolderModal } from "./AddFolderModal";

export default {
  title: "Archive/Modals/AddFolderModal",
  component: AddFolderModal,
} as Meta<typeof AddFolderModal>;

const Template: StoryFn<typeof AddFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        폴더 추가 모달 열기
      </button>
      <AddFolderModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(folderName: string, folderColor: string) => {
          alert(`Folder added: ${folderName}, Color: ${folderColor}`);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
