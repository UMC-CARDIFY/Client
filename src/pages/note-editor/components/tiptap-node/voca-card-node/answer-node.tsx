import { ArrowIcon } from "@svgs/index";
import type { NodeViewProps } from "@tiptap/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";

interface ArrowButtonProps {
  reversed: boolean;
  onClick: (e: MouseEvent) => void;
}

const ArrowButton = ({ reversed, onClick }: ArrowButtonProps) => (
  <span
    contentEditable={false}
    onClick={onClick}
    className="voca-arrow-btn w-6 h-6 rounded inline-flex justify-center items-center text-blue-600 hover:bg-black/5 cursor-pointer shrink-0 select-none"
    style={{ transform: reversed ? "rotate(180deg)" : "none" }}
  >
    <ArrowIcon />
  </span>
);

export const AnswerNodeComponent = ({ editor, getPos }: NodeViewProps) => {
  // 부모 vocacard 노드에서 reversed 속성 가져오기
  const [reversed, setReversed] = useState(false);

  useEffect(() => {
    const updateReversed = () => {
      const pos = getPos();
      if (typeof pos !== "number") return;

      // 현재 노드의 위치에서 부모 vocacard 찾기
      const resolvedPos = editor.state.doc.resolve(pos);
      for (let depth = resolvedPos.depth; depth >= 0; depth--) {
        const node = resolvedPos.node(depth);
        if (node.type.name === "vocacard") {
          setReversed(node.attrs.reversed as boolean);
          break;
        }
      }
    };

    updateReversed();
    editor.on("transaction", updateReversed);
    return () => {
      editor.off("transaction", updateReversed);
    };
  }, [editor, getPos]);

  const handleArrowClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      editor.chain().focus().toggleVocaCardDirection().run();
    },
    [editor],
  );

  return (
    <NodeViewWrapper as="span" data-type="answer" className="voca-answer-wrapper inline-flex items-center gap-1">
      <ArrowButton reversed={reversed} onClick={handleArrowClick} />
      <NodeViewContent as="span" className="text-gray-900 text-base font-normal font-['Pretendard'] leading-6" />
    </NodeViewWrapper>
  );
};
