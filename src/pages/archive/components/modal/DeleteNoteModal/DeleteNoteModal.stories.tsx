import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { DeleteNoteModal } from "./DeleteNoteModal";

export default {
  title: "Archive/DeleteNoteModal",
  component: DeleteNoteModal,
} as Meta<typeof DeleteNoteModal>;

const Template: StoryFn<typeof DeleteNoteModal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* 모달 열기 버튼 */}
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        노트 삭제 모달 열기
      </button>

      <DeleteNoteModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {
          alert("노트가 삭제되었습니다.");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  noteName: "노트 이름",
  additionalCount: 9, // 추가 삭제되는 노트 개수
};
