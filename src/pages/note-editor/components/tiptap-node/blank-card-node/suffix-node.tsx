import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const SuffixNodeComponent = () => (
  <NodeViewWrapper
    as="span"
    data-type="suffix"
    className="inline text-gray-900 text-base font-normal font-['Pretendard'] leading-6"
  >
    <NodeViewContent as="span" />
  </NodeViewWrapper>
);
