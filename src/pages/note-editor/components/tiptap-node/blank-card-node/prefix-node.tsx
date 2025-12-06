import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const PrefixNodeComponent = () => (
  <NodeViewWrapper
    as="span"
    data-type="prefix"
    className="inline text-gray-900 text-base font-normal font-['Pretendard'] leading-6"
  >
    <NodeViewContent as="span" />
  </NodeViewWrapper>
);
