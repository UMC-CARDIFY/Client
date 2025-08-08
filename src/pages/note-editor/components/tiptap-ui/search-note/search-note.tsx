import { SearchIcon } from "@svgs/index";
import { type Editor } from "@tiptap/react";
import * as React from "react";
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

export interface SearchNoteProps {
  editor?: Editor | null;
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchNote = React.forwardRef<HTMLInputElement, SearchNoteProps>(
  ({ editor: providedEditor, placeholder = "검색...", onSearch, className = "", ...props }, ref) => {
    const editor = useTiptapEditor(providedEditor);
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = React.useCallback(
      (query: string) => {
        if (!editor) return;

        // TipTap 에디터에서 텍스트 검색 구현
        if (query.trim()) {
          const { state } = editor;
          const { doc } = state;

          const textContent = doc.textContent.toLowerCase();
          const searchTerm = query.toLowerCase();
          const index = textContent.indexOf(searchTerm);

          if (index !== -1) {
            // 검색된 위치로 스크롤하고 선택
            let pos = 0;
            doc.descendants((node, nodePos) => {
              if (node.isText) {
                const nodeText = node.text?.toLowerCase() || "";
                const nodeIndex = nodeText.indexOf(searchTerm);

                if (nodeIndex !== -1 && pos <= index && index < pos + nodeText.length) {
                  const from = nodePos + nodeIndex;
                  const to = from + searchTerm.length;

                  editor.chain().focus().setTextSelection({ from, to }).run();

                  return false;
                }
                pos += nodeText.length;
              }
              return true;
            });
          }
        }

        onSearch?.(query);
      },
      [editor, onSearch],
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch(searchQuery);
      }
      if (e.key === "Escape") {
        setSearchQuery("");
        (e.target as HTMLInputElement).blur();
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSearch(searchQuery);
    };

    if (!editor || !editor.isEditable) {
      return null;
    }

    return (
      <div className={`search-note ${className}`.trim()}>
        <div className="search-note-wrapper">
          <SearchIcon className="search-note-icon" />
          <input
            ref={ref}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="search-note-input"
            onSubmit={handleSubmit}
            {...props}
          />
        </div>
      </div>
    );
  },
);

SearchNote.displayName = "SearchNote";
