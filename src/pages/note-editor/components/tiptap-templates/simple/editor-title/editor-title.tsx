import { FullFlashcardIcon } from "@svgs/index";
import * as React from "react";

interface EditorTitleProps {
  title: string;
  onTitleChange: (title: string) => void;
  className?: string;
}

export const EditorTitle: React.FC<EditorTitleProps> = ({ title, onTitleChange, className = "" }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  React.useEffect(() => {
    adjustHeight();
  }, [title, adjustHeight]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.length <= 50) {
      onTitleChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className={`editor-title-container ${className}`.trim()}>
      <div className="editor-title-wrapper">
        <textarea
          ref={textareaRef}
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="editor-title-input"
          rows={1}
          maxLength={50}
          style={{ resize: "none", overflow: "hidden" }}
        />
        <div className="editor-title-icon">
          <FullFlashcardIcon />
        </div>
      </div>
      <div className="title-divider" />
    </div>
  );
};

export default EditorTitle;
