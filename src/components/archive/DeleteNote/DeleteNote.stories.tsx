import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { DeleteNote } from "./DeleteNote";

export default {
  title: "Archive/DeleteNote",
  component: DeleteNote,
} as Meta<typeof DeleteNote>;

const Template: StoryFn<typeof DeleteNote> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* 모달 열기 버튼 */}
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        노트 삭제 모달 열기
      </button>

      <DeleteNote
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
