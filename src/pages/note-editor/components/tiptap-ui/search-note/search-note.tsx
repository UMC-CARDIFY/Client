import { SearchIcon } from "@svgs/index";
import { type Editor } from "@tiptap/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

export interface SearchResult {
  id: string;
  text: string;
  from: number;
  to: number;
}

export interface SearchNoteProps {
  editor?: Editor | null;
  placeholder?: string;
  onSearch?: (query: string) => void;
  onResultClick?: (result: SearchResult) => void;
  className?: string;
}

const HighlightedText: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query.trim()) return <span>{text}</span>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="search-result-highlight">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
};

export const SearchNote = React.forwardRef<HTMLInputElement, SearchNoteProps>(
  ({ editor: providedEditor, placeholder = "검색...", onSearch, onResultClick, className = "", ...props }, ref) => {
    const editor = useTiptapEditor(providedEditor);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 });
    const containerRef = React.useRef<HTMLDivElement>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const findAllMatches = React.useCallback(
      (query: string): SearchResult[] => {
        if (!editor || !query.trim()) return [];

        const results: SearchResult[] = [];
        const { state } = editor;
        const { doc } = state;
        const searchTerm = query.toLowerCase();

        doc.descendants((node, pos) => {
          if (node.isText && node.text) {
            const nodeText = node.text.toLowerCase();
            let matchIndex = nodeText.indexOf(searchTerm);

            while (matchIndex !== -1) {
              const from = pos + matchIndex;
              const to = from + searchTerm.length;

              // 매치된 텍스트 주변 컨텍스트 가져오기
              const contextStart = Math.max(0, matchIndex - 20);
              const contextEnd = Math.min(node.text.length, matchIndex + searchTerm.length + 30);
              let contextText = node.text.slice(contextStart, contextEnd);

              if (contextStart > 0) contextText = `...${contextText}`;
              if (contextEnd < node.text.length) contextText = `${contextText}...`;

              results.push({
                id: `${pos}-${matchIndex}`,
                text: contextText,
                from,
                to,
              });

              matchIndex = nodeText.indexOf(searchTerm, matchIndex + 1);
            }
          }
          return true;
        });

        return results;
      },
      [editor],
    );

    const handleSearch = React.useCallback(
      (query: string) => {
        const results = findAllMatches(query);
        setSearchResults(results);
        setIsDropdownOpen(results.length > 0 && query.trim().length > 0);
        onSearch?.(query);
      },
      [findAllMatches, onSearch],
    );

    const handleResultClick = React.useCallback(
      (result: SearchResult) => {
        if (!editor) return;

        editor.chain().focus().setTextSelection({ from: result.from, to: result.to }).run();

        setIsDropdownOpen(false);
        onResultClick?.(result);
      },
      [editor, onResultClick],
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);
      handleSearch(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (searchResults.length > 0) {
          handleResultClick(searchResults[0]);
        }
      }
      if (e.key === "Escape") {
        setSearchQuery("");
        setSearchResults([]);
        setIsDropdownOpen(false);
        (e.target as HTMLInputElement).blur();
      }
    };

    const handleFocus = () => {
      if (searchQuery.trim() && searchResults.length > 0) {
        setIsDropdownOpen(true);
      }
    };

    const updateDropdownPosition = React.useCallback(() => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4,
          left: rect.left,
        });
      }
    }, []);

    React.useEffect(() => {
      if (isDropdownOpen) {
        updateDropdownPosition();
        window.addEventListener("scroll", updateDropdownPosition, true);
        window.addEventListener("resize", updateDropdownPosition);
        return () => {
          window.removeEventListener("scroll", updateDropdownPosition, true);
          window.removeEventListener("resize", updateDropdownPosition);
        };
      }
    }, [isDropdownOpen, updateDropdownPosition]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        const isOutsideContainer = containerRef.current && !containerRef.current.contains(target);
        const isOutsideDropdown = !dropdownRef.current || !dropdownRef.current.contains(target);

        if (isOutsideContainer && isOutsideDropdown) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!editor || !editor.isEditable) {
      return null;
    }

    return (
      <div ref={containerRef} className={`search-note ${className}`.trim()}>
        <div ref={wrapperRef} className="search-note-wrapper">
          <SearchIcon className="search-note-icon" />
          <input
            ref={ref}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            placeholder={placeholder}
            className="search-note-input"
            {...props}
          />
        </div>
        {isDropdownOpen &&
          searchResults.length > 0 &&
          ReactDOM.createPortal(
            <div
              ref={dropdownRef}
              className="search-results-dropdown"
              style={{
                position: "fixed",
                top: dropdownPosition.top,
                left: dropdownPosition.left,
              }}
            >
              {searchResults.slice(0, 7).map((result) => (
                <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result)}>
                  <div className="search-result-text">
                    <HighlightedText text={result.text} query={searchQuery} />
                  </div>
                </div>
              ))}
            </div>,
            document.body,
          )}
      </div>
    );
  },
);

SearchNote.displayName = "SearchNote";
