import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import type { NodeViewProps } from "@tiptap/react";
import { Check, Copy, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { languages } from "../../lib/tiptap-extensions";

export const CodeBlockComponent: React.FC<NodeViewProps> = ({ node, updateAttributes, editor }) => {
  const [copied, setCopied] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleCopy = () => {
    const codeText = node.textContent;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    editor.chain().focus().deleteNode("codeBlock").run();
  };

  const handleLanguageChange = (lang: string) => {
    updateAttributes({ language: lang });
    setShowLanguageDropdown(false);
  };

  const currentLanguage = languages.find((l) => l.value === node.attrs.language) || languages[languages.length - 1];

  return (
    <NodeViewWrapper
      className="relative group my-4 bg-gray-50 rounded-lg border border-gray-200"
      style={{ overflow: "visible" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-1 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>{currentLanguage.label}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showLanguageDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => handleLanguageChange(lang.value)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1.5 text-gray-500 hover:text-gray-700 transition-colors"
            title="복사"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            <span className="text-xs">{copied ? "복사됨" : "복사"}</span>
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-2 py-1.5 text-gray-500 hover:text-red-600 transition-colors"
            title="삭제"
          >
            <Trash2 className="w-4 h-4" />
            <span className="text-xs">삭제</span>
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto rounded-b-lg px-5 pb-5">
        <NodeViewContent
          as="pre"
          className="block text-sm text-gray-800"
          style={{ border: "none", outline: "none", boxShadow: "none", background: "none", margin: 0, padding: 0 }}
        />
      </div>
    </NodeViewWrapper>
  );
};
