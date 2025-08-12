import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

// --- Icons ---
import { ChevronDownIcon } from "../../tiptap-icons/chevron-down-icon";

// --- Lib ---
import { isNodeInSchema } from "../../../lib/tiptap-utils";

// --- Tiptap UI ---
import { type Level } from "../../tiptap-ui/heading-button/heading-button";

// --- Styles ---
import "./heading-dropdown-menu.scss";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../tiptap-ui-primitive/dropdown-menu";

export interface HeadingDropdownMenuProps extends Omit<ButtonProps, "type"> {
  editor?: Editor | null;
  levels?: Level[];
  hideWhenUnavailable?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function HeadingDropdownMenu({
  editor: providedEditor,
  levels = [1, 2, 3],
  hideWhenUnavailable = false,
  onOpenChange,
  ...props
}: HeadingDropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const editor = useTiptapEditor(providedEditor);

  const headingInSchema = isNodeInSchema("heading", editor);

  const handleOnOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange],
  );

  const getActiveText = React.useCallback(() => {
    if (!editor) return "텍스트";

    const activeLevel = levels.find((level) => editor.isActive("heading", { level })) as Level | undefined;

    if (!activeLevel) return "텍스트";

    return `제목 ${activeLevel}`;
  }, [editor, levels]);

  const getFormattedHeadingName = (level: Level): string => {
    return `제목 ${level}`;
  };

  const canToggleAnyHeading = React.useCallback((): boolean => {
    if (!editor) return false;
    return levels.some((level) => editor.can().toggleNode("heading", "paragraph", { level }));
  }, [editor, levels]);

  const isDisabled = !canToggleAnyHeading();
  const isAnyHeadingActive = editor?.isActive("heading") ?? false;

  const show = React.useMemo(() => {
    if (!headingInSchema || !editor) {
      return false;
    }

    if (hideWhenUnavailable) {
      if (isNodeSelection(editor.state.selection) || !canToggleAnyHeading()) {
        return false;
      }
    }

    return true;
  }, [headingInSchema, editor, hideWhenUnavailable, canToggleAnyHeading]);

  if (!show || !editor || !editor.isEditable) {
    return null;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOnOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          disabled={isDisabled}
          data-style="ghost"
          data-active-state={isAnyHeadingActive ? "on" : "off"}
          data-disabled={isDisabled}
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="button"
          tabIndex={-1}
          aria-label="Format text as heading"
          aria-pressed={isAnyHeadingActive}
          tooltip="스타일"
          {...props}
          className="heading-dropdown-button"
        >
          <span className="heading-dropdown-text">{getActiveText()}</span>
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="heading-dropdown-content">
        <DropdownMenuGroup>
          {/* 본문 아이템 */}
          <DropdownMenuItem asChild>
            <button
              className="heading-dropdown-item"
              onClick={() => {
                editor?.chain().focus().setNode("paragraph").run();
              }}
            >
              본문
            </button>
          </DropdownMenuItem>

          {/* 헤딩 아이템들 */}
          {levels.map((level) => (
            <DropdownMenuItem key={`heading-${level}`} asChild>
              <button
                className="heading-dropdown-item"
                onClick={() => {
                  if (editor?.isActive("heading", { level })) {
                    editor.chain().focus().setNode("paragraph").run();
                  } else {
                    editor?.chain().focus().toggleNode("heading", "paragraph", { level }).run();
                  }
                }}
              >
                {getFormattedHeadingName(level)}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeadingDropdownMenu;
