import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { PrefixNodeComponent } from "./prefix-node";

/**
 * A TipTap node extension for Prefix (앞 텍스트) component inside BlankCard.
 */
export const PrefixNode = Node.create({
  name: "prefix",

  group: "",

  inline: true,

  content: "inline*",

  defining: true,

  draggable: false,

  selectable: false,

  parseHTML() {
    return [{ tag: 'span[data-type="prefix"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes({ "data-type": "prefix" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(PrefixNodeComponent, {
      as: "span",
    });
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { $from } = selection;

        // 현재 prefix 노드 안에 있는지 확인
        for (let depth = $from.depth; depth >= 0; depth--) {
          const node = $from.node(depth);
          if (node.type.name === "prefix") {
            // 다음 형제 노드(blank)로 이동
            const parentDepth = depth - 1;
            if (parentDepth >= 0) {
              const parent = $from.node(parentDepth);
              if (parent.type.name === "blankcard") {
                // blank 노드의 시작 위치로 이동
                const prefixPos = $from.before(depth);
                const prefixNode = $from.node(depth);
                const blankPos = prefixPos + prefixNode.nodeSize;
                editor
                  .chain()
                  .focus()
                  .setTextSelection(blankPos + 1)
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

export default PrefixNode;
