import type { NodeViewProps } from "@tiptap/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const BlankCardNode = (_props: NodeViewProps) => {
  return (
    <NodeViewWrapper className="w-full my-2" data-type="blankcard">
      <div className="w-full px-1 py-0.5 rounded inline-flex justify-start items-center gap-1 flex-wrap content-center">
        <NodeViewContent className="blank-card-content" />
      </div>
    </NodeViewWrapper>
  );
};
