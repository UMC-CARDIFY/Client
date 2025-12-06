import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { AnswerNodeComponent } from "./answer-node";

/**
 * A TipTap node extension for Answer component inside VocaCard.
 */
export const AnswerNode = Node.create({
  name: "answer",

  group: "",

  inline: true,

  content: "inline*",

  defining: true,

  draggable: false,

  selectable: false,

  parseHTML() {
    return [{ tag: 'span[data-type="answer"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ "data-type": "answer" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(AnswerNodeComponent, {
      as: "span",
    });
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { $from } = selection;

        // 현재 answer 노드 안에 있는지 확인
        for (let depth = $from.depth; depth >= 0; depth--) {
          const node = $from.node(depth);
          if (node.type.name === "answer") {
            // vocacard 밖으로 나가서 새 paragraph 생성
            const vocacardDepth = depth - 1;
            if (vocacardDepth >= 0) {
              const parent = $from.node(vocacardDepth);
              if (parent.type.name === "vocacard") {
                const vocacardPos = $from.before(vocacardDepth);
                const endPos = vocacardPos + parent.nodeSize;
                editor.chain().focus().setTextSelection(endPos).insertContent({ type: "paragraph" }).run();
                return true;
              }
            }
          }
        }
        return false;
      },
    };
  },
});

export default AnswerNode;
