import type { NodeViewProps } from "@tiptap/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";

export const QuestionNodeComponent: React.FC<NodeViewProps> = () => {
  return (
    <NodeViewWrapper
      as="span"
      data-type="question"
      className="inline text-gray-900 text-base font-normal font-['Pretendard'] leading-6"
    >
      <NodeViewContent as="span" />
    </NodeViewWrapper>
  );
};
