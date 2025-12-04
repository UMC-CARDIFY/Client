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
});

export default AnswerNode;
