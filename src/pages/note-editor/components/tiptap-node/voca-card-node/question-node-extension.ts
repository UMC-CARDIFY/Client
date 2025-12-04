import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { QuestionNodeComponent } from "./question-node";

/**
 * A TipTap node extension for Question component inside VocaCard.
 */
export const QuestionNode = Node.create({
  name: "question",

  group: "",

  inline: true,

  content: "inline*",

  defining: true,

  draggable: false,

  selectable: false,

  parseHTML() {
    return [{ tag: 'span[data-type="question"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ "data-type": "question" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(QuestionNodeComponent, {
      as: "span",
    });
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { $from } = selection;

        // 현재 question 노드 안에 있는지 확인
        for (let depth = $from.depth; depth >= 0; depth--) {
          const node = $from.node(depth);
          if (node.type.name === "question") {
            // 다음 형제 노드(answer)로 이동
            const parentDepth = depth - 1;
            if (parentDepth >= 0) {
              const parent = $from.node(parentDepth);
              if (parent.type.name === "vocacard") {
                // answer 노드의 시작 위치로 이동
                const questionPos = $from.before(depth);
                const questionNode = $from.node(depth);
                const answerPos = questionPos + questionNode.nodeSize;
                editor
                  .chain()
                  .focus()
                  .setTextSelection(answerPos + 1)
                  .run();
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

export default QuestionNode;
