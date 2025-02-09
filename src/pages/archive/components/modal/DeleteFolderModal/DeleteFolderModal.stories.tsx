import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { DeleteFolderModal } from "./DeleteFolderModal";

export default {
  title: "Archive/Modals/DeleteFolderModal",
  component: DeleteFolderModal,
} as Meta<typeof DeleteFolderModal>;

const Template: StoryFn<typeof DeleteFolderModal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* 모달 열기 버튼 */}
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        폴더 삭제 모달 열기
      </button>

      <DeleteFolderModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {
          alert("폴더가 삭제되었습니다.");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  folderName: "폴더 이름", // 폴더 이름 예시
};
