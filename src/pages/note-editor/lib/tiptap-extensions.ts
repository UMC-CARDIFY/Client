// @ts-ignore - highlight.js language imports don't have proper TypeScript definitions
import css from "highlight.js/lib/languages/css";
// @ts-ignore
import java from "highlight.js/lib/languages/java";
// @ts-ignore
import javascript from "highlight.js/lib/languages/javascript";
// @ts-ignore
import json from "highlight.js/lib/languages/json";
// @ts-ignore
import kotlin from "highlight.js/lib/languages/kotlin";
// @ts-ignore
import python from "highlight.js/lib/languages/python";
// @ts-ignore
import sql from "highlight.js/lib/languages/sql";
// @ts-ignore
import swift from "highlight.js/lib/languages/swift";
// @ts-ignore
import typescript from "highlight.js/lib/languages/typescript";
// @ts-ignore
import xml from "highlight.js/lib/languages/xml";
// lib/tiptap-extensions.ts
import { createLowlight } from "lowlight";

// lowlight 인스턴스 생성
const lowlight = createLowlight();

// 언어 등록
lowlight.register("javascript", javascript);
lowlight.register("python", python);
lowlight.register("typescript", typescript);
lowlight.register("css", css);
lowlight.register("java", java);
lowlight.register("kotlin", kotlin);
lowlight.register("swift", swift);
lowlight.register("json", json);
lowlight.register("xml", xml);
lowlight.register("html", xml);
lowlight.register("sql", sql);

// 지원 언어 목록
export const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "kotlin", label: "Kotlin" },
  { value: "swift", label: "Swift" },
  { value: "css", label: "CSS" },
  { value: "html", label: "HTML" },
  { value: "json", label: "JSON" },
  { value: "sql", label: "SQL" },
  { value: "plaintext", label: "Plain Text" },
];

export { lowlight };
