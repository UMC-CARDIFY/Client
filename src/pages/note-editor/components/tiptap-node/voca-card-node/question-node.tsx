import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const QuestionNodeComponent = () => (
  <NodeViewWrapper
    as="span"
    data-type="question"
    className="inline text-gray-900 text-base font-normal font-['Pretendard'] leading-6"
  >
    <NodeViewContent as="span" />
  </NodeViewWrapper>
);
