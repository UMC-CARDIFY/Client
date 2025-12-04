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
});

export default QuestionNode;
