import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { VocaCardNode as VocaCardNodeComponent } from "./voca-card-node";

declare module "@tiptap/react" {
  interface Commands<ReturnType> {
    vocaCard: {
      setVocaCardNode: () => ReturnType;
      toggleVocaCardDirection: () => ReturnType;
    };
  }
}

/**
 * A TipTap node extension for VocaCard component.
 */
export const VocaCardNode = Node.create({
  name: "vocacard",

  group: "block",

  content: "question answer",

  draggable: true,

  selectable: true,

  addAttributes() {
    return {
      reversed: {
        default: false,
        parseHTML: (element) => element.getAttribute("data-reversed") === "true",
        renderHTML: (attributes) => ({
          "data-reversed": attributes.reversed,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="vocacard"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes({ "data-type": "vocacard" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(VocaCardNodeComponent);
  },

  addCommands() {
    return {
      setVocaCardNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { reversed: false },
            content: [
              {
                type: "question",
                content: [
                  {
                    type: "text",
                    text: "질문을 입력하세요",
                  },
                ],
              },
              {
                type: "answer",
                content: [
                  {
                    type: "text",
                    text: "답변을 입력하세요",
                  },
                ],
              },
            ],
          });
        },
      toggleVocaCardDirection:
        () =>
        ({ tr, state, dispatch }) => {
          const { selection } = state;
          const { $from } = selection;

          // vocacard 노드 찾기
          let vocacardPos: number | null = null;
          let vocacardNode = null;

          for (let depth = $from.depth; depth >= 0; depth--) {
            const node = $from.node(depth);
            if (node.type.name === "vocacard") {
              vocacardPos = $from.before(depth);
              vocacardNode = node;
              break;
            }
          }

          if (vocacardPos === null || !vocacardNode || !dispatch) {
            return false;
          }

          const currentReversed = vocacardNode.attrs.reversed;

          // reversed 속성 토글
          tr.setNodeMarkup(vocacardPos, undefined, {
            ...vocacardNode.attrs,
            reversed: !currentReversed,
          });

          dispatch(tr);
          return true;
        },
    };
  },
});

export default VocaCardNode;
