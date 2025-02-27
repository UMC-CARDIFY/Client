import { Text } from "@components/typography/Text";
import { NewFolderIcon } from "@svgs/index";
import React from "react";

const EmptyNoteState = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 text-gray-500">
      <NewFolderIcon />
      <Text variant="sub_heading2">아직 작성한 노트가 없습니다.</Text>
      <Text variant="body3">새로운 노트를 추가하고 학습을 시작하세요.</Text>
    </div>
  );
};

export default EmptyNoteState;
