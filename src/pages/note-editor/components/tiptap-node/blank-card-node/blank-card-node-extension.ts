import { Node, mergeAttributes } from "@tiptap/react";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { BlankCardNode as BlankCardNodeComponent } from "./blank-card-node";

declare module "@tiptap/react" {
  interface Commands<ReturnType> {
    blankCard: {
      setBlankCardNode: () => ReturnType;
    };
  }
}

/**
 * A TipTap node extension for BlankCard component.
 * Structure: [prefix text] [blank answer] [suffix text]
 */
export const BlankCardNode = Node.create({
  name: "blankcard",

  group: "block",

  content: "prefix blank suffix",

  draggable: true,

  selectable: true,

  parseHTML() {
    return [{ tag: 'div[data-type="blankcard"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes({ "data-type": "blankcard" }, HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(BlankCardNodeComponent);
  },

  addCommands() {
    return {
      setBlankCardNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [
              {
                type: "prefix",
                content: [
                  {
                    type: "text",
                    text: "앞 문장을 입력하세요",
                  },
                ],
              },
              {
                type: "blank",
                content: [
                  {
                    type: "text",
                    text: "정답",
                  },
                ],
              },
              {
                type: "suffix",
                content: [
                  {
                    type: "text",
                    text: "뒷 문장을 입력하세요",
                  },
                ],
              },
            ],
          });
        },
    };
  },
});

export default BlankCardNode;
