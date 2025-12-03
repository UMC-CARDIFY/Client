import type { NodeViewProps } from "@tiptap/react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import * as React from "react";

interface ArrowIconProps {
  reversed: boolean;
  onClick: () => void;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ reversed, onClick }) => (
  <span
    contentEditable={false}
    onClick={onClick}
    className="voca-arrow-btn w-6 h-6 rounded inline-flex justify-center items-center text-blue-600 hover:bg-black/5 cursor-pointer shrink-0 select-none"
    style={{ transform: reversed ? "rotate(180deg)" : "none" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
      <path
        d="M5.5918 8.69531L4.82617 7.95703L7.88867 4.89453H0V3.81445H7.88867L4.82617 0.751953L5.5918 0L9.93945 4.34766L5.5918 8.69531Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

export const AnswerNodeComponent: React.FC<NodeViewProps> = ({ editor, getPos }) => {
  // 부모 vocacard 노드에서 reversed 속성 가져오기
  const [reversed, setReversed] = React.useState(false);

  React.useEffect(() => {
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

  const handleArrowClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      editor.chain().focus().toggleVocaCardDirection().run();
    },
    [editor],
  );

  return (
    <NodeViewWrapper as="span" data-type="answer" className="voca-answer-wrapper inline-flex items-center gap-1">
      <ArrowIcon reversed={reversed} onClick={handleArrowClick} />
      <NodeViewContent as="span" className="text-gray-900 text-base font-normal font-['Pretendard'] leading-6" />
    </NodeViewWrapper>
  );
};
