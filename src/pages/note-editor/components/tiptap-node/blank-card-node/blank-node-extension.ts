import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { BlankNodeComponent } from "./blank-node";

/**
 * A TipTap node extension for Blank (빈칸 정답) component inside BlankCard.
 */
export const BlankNode = Node.create({
  name: "blank",

  group: "",

  inline: true,

  content: "inline*",

  defining: true,

  draggable: false,

  selectable: false,

  parseHTML() {
    return [{ tag: 'span[data-type="blank"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ "data-type": "blank" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(BlankNodeComponent, {
      as: "span",
    });
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { $from } = selection;

        // 현재 blank 노드 안에 있는지 확인
        for (let depth = $from.depth; depth >= 0; depth--) {
          const node = $from.node(depth);
          if (node.type.name === "blank") {
            // 다음 형제 노드(suffix)로 이동
            const parentDepth = depth - 1;
            if (parentDepth >= 0) {
              const parent = $from.node(parentDepth);
              if (parent.type.name === "blankcard") {
                // suffix 노드의 시작 위치로 이동
                const blankPos = $from.before(depth);
                const blankNode = $from.node(depth);
                const suffixPos = blankPos + blankNode.nodeSize;
                editor
                  .chain()
                  .focus()
                  .setTextSelection(suffixPos + 1)
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

export default BlankNode;
