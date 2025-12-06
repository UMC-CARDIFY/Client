import { NoteContent } from "@typedefs";

// 노드에서 텍스트 추출 헬퍼 함수
const extractTextFromContent = (content?: NoteContent[]): string => {
  if (!content) return "";
  return content
    .map((node) => {
      if (node.type === "text") return node.text || "";
      if (node.content) return extractTextFromContent(node.content);
      return "";
    })
    .join("");
};

// 백엔드 API 형식을 TipTap JSON으로 역변환
export const transformContentFromApi = (content: NoteContent): NoteContent => {
  // vocacard 역변환
  if (content.type === "vocacard") {
    const questionText = content.attrs?.question_front || "질문을 입력하세요";
    const answerText = content.attrs?.answer?.[0] || "답변을 입력하세요";

    return {
      type: "vocacard",
      attrs: { reversed: content.attrs?.reversed ?? false },
      content: [
        {
          type: "question",
          content: [{ type: "text", text: questionText }],
        },
        {
          type: "answer",
          content: [{ type: "text", text: answerText }],
        },
      ],
    };
  }

  // blankcard 역변환
  if (content.type === "blankcard") {
    const prefixText = content.attrs?.question_front || "앞 문장을 입력하세요";
    const blankText = content.attrs?.answer?.[0] || "정답";
    const suffixText = content.attrs?.question_back || "뒷 문장을 입력하세요";

    return {
      type: "blankcard",
      content: [
        {
          type: "prefix",
          content: [{ type: "text", text: prefixText }],
        },
        {
          type: "blank",
          content: [{ type: "text", text: blankText }],
        },
        {
          type: "suffix",
          content: [{ type: "text", text: suffixText }],
        },
      ],
    };
  }

  if (content.content) {
    return {
      ...content,
      content: content.content.map(transformContentFromApi),
    };
  }

  return content;
};

// TipTap JSON을 백엔드 API 형식으로 변환
export const transformContentForApi = (content: NoteContent): NoteContent => {
  // vocacard 변환
  if (content.type === "vocacard") {
    const questionNode = content.content?.find((c) => c.type === "question");
    const answerNode = content.content?.find((c) => c.type === "answer");

    const questionText = extractTextFromContent(questionNode?.content);
    const answerText = extractTextFromContent(answerNode?.content);

    return {
      type: "vocacard",
      attrs: {
        ...content.attrs,
        question_front: questionText,
        answer: [answerText],
      },
    };
  }

  // blankcard 변환
  if (content.type === "blankcard") {
    const prefixNode = content.content?.find((c) => c.type === "prefix");
    const blankNode = content.content?.find((c) => c.type === "blank");
    const suffixNode = content.content?.find((c) => c.type === "suffix");

    const prefixText = extractTextFromContent(prefixNode?.content);
    const blankText = extractTextFromContent(blankNode?.content);
    const suffixText = extractTextFromContent(suffixNode?.content);

    return {
      type: "blankcard",
      attrs: {
        question_front: prefixText,
        question_back: suffixText,
        answer: [blankText],
      },
    };
  }

  if (content.content) {
    return {
      ...content,
      content: content.content.map(transformContentForApi),
    };
  }

  return content;
};
