import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const BlankNodeComponent = () => (
  <NodeViewWrapper
    as="span"
    data-type="blank"
    className="blank-answer px-1 py-0.5 rounded border-[1.5px] border-dashed border-blue-400 inline-flex justify-center items-center gap-2"
  >
    <NodeViewContent as="span" className="text-gray-900 text-base font-normal font-['Pretendard'] leading-6" />
  </NodeViewWrapper>
);
