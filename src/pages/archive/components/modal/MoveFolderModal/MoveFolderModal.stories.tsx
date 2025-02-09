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
    { id: "1", name: "1강", color: "#77CEC6", isStarred: true, itemCount: 5 },
    { id: "2", name: "2강", color: "#AECA99", isStarred: false, itemCount: 3 },
    { id: "3", name: "3강", color: "#D49AE9", isStarred: true, itemCount: 8 },
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
