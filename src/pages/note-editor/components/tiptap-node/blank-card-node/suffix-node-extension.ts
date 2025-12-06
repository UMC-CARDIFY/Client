import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { SuffixNodeComponent } from "./suffix-node";

/**
 * A TipTap node extension for Suffix (뒤 텍스트) component inside BlankCard.
 */
export const SuffixNode = Node.create({
  name: "suffix",

  group: "",

  inline: true,

  content: "inline*",

  defining: true,

  draggable: false,

  selectable: false,

  parseHTML() {
    return [{ tag: 'span[data-type="suffix"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ "data-type": "suffix" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SuffixNodeComponent, {
      as: "span",
    });
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { $from } = selection;

        // 현재 suffix 노드 안에 있는지 확인
        for (let depth = $from.depth; depth >= 0; depth--) {
          const node = $from.node(depth);
          if (node.type.name === "suffix") {
            // blankcard 밖으로 나가서 새 paragraph 생성
            const blankcardDepth = depth - 1;
            if (blankcardDepth >= 0) {
              const parent = $from.node(blankcardDepth);
              if (parent.type.name === "blankcard") {
                const blankcardPos = $from.before(blankcardDepth);
                const endPos = blankcardPos + parent.nodeSize;
                editor
                  .chain()
                  .focus()
                  .insertContentAt(endPos, { type: "paragraph" })
                  .setTextSelection(endPos + 1)
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

export default SuffixNode;
