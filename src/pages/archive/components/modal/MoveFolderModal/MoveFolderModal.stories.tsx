import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { MoveFolderModal } from "./MoveFolderModal";

export default {
  title: "Archive/Modals/MoveFolderModal",
  component: MoveFolderModal,
} as Meta<typeof MoveFolderModal>;

const Template: StoryFn<typeof MoveFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  // 예제 데이터
  const folders = [
    {
      id: "1",
      folderName: "1강",
      noteCount: 5,
      folderColor: "#AECA99",
      markState: true,
    },
    {
      id: "2",
      folderName: "2강",
      noteCount: 3,
      folderColor: "#AECA99",
      markState: false,
    },
    {
      id: "3",
      folderName: "3강",
      noteCount: 8,
      folderColor: "#AECA99",
      markState: false,
    },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        하위 폴더 이동 모달 열기
      </button>
      <MoveFolderModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(folderId) =>
          alert(`폴더가 이동되었습니다: ${folders.find((folder) => folder.id === folderId)?.name}`)
        }
        currentFolderName="4강"
        folders={folders}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
