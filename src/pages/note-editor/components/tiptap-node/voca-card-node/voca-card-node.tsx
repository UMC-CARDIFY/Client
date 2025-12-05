import type { NodeViewProps } from "@tiptap/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";

export const VocaCardNode: React.FC<NodeViewProps> = ({ node }) => {
  const reversed = node.attrs.reversed as boolean;

  return (
    <NodeViewWrapper className="w-full my-2" data-type="vocacard" data-reversed={reversed}>
      <div className="w-full px-1 py-0.5 rounded inline-flex justify-start items-center gap-1 flex-wrap content-center">
        <NodeViewContent className="voca-card-content" />
      </div>
    </NodeViewWrapper>
  );
};
