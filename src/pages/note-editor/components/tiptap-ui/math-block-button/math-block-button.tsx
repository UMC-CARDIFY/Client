import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

// --- Icons ---
import { MathBlockIcon } from "../../tiptap-icons/math-block-icon";

// --- Lib ---
import { isNodeInSchema } from "../../../lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";

export interface MathBlockButtonProps extends Omit<ButtonProps, "type"> {
  /**
   * The TipTap editor instance.
   */
  editor?: Editor | null;
  /**
   * Optional text to display alongside the icon.
   */
  text?: string;
  /**
   * Whether the button should hide when the node is not available.
   * @default false
   */
  hideWhenUnavailable?: boolean;
}

export function canToggleMathBlock(editor: Editor | null): boolean {
  if (!editor) return false;

  try {
    // TODO: 실제 수식 블록 토글 가능 여부 체크 로직 구현
    // return editor.can().toggleNode("mathBlock", "paragraph");
    return true;
  } catch {
    return false;
  }
}

export function isMathBlockActive(editor: Editor | null): boolean {
  if (!editor) return false;
  // TODO: 실제 수식 블록 활성 상태 체크 로직 구현
  // return editor.isActive("mathBlock");
  return false;
}

export function toggleMathBlock(editor: Editor | null): boolean {
  if (!editor) return false;
  // TODO: 실제 수식 블록 토글 로직 구현
  // return editor.chain().focus().toggleNode("mathBlock", "paragraph").run();
  console.log("Toggling math block");
  return true;
}

export function isMathBlockButtonDisabled(editor: Editor | null, canToggle: boolean, userDisabled = false): boolean {
  if (!editor) return true;
  if (userDisabled) return true;
  if (!canToggle) return true;
  return false;
}

export function shouldShowMathBlockButton(params: {
  editor: Editor | null;
  hideWhenUnavailable: boolean;
  nodeInSchema: boolean;
  canToggle: boolean;
}): boolean {
  const { editor, hideWhenUnavailable, nodeInSchema, canToggle } = params;

  if (!nodeInSchema || !editor) {
    return false;
  }

  if (hideWhenUnavailable) {
    if (isNodeSelection(editor.state.selection) || !canToggle) {
      return false;
    }
  }

  return Boolean(editor?.isEditable);
}

export function useMathBlockState(editor: Editor | null, disabled = false, hideWhenUnavailable = false) {
  // 임시 "paragraph" 사용
  const nodeInSchema = isNodeInSchema("paragraph", editor);

  const canToggle = canToggleMathBlock(editor);
  const isDisabled = isMathBlockButtonDisabled(editor, canToggle, disabled);
  const isActive = isMathBlockActive(editor);

  const shouldShow = React.useMemo(
    () =>
      shouldShowMathBlockButton({
        editor,
        hideWhenUnavailable,
        nodeInSchema,
        canToggle,
      }),
    [editor, hideWhenUnavailable, nodeInSchema, canToggle],
  );

  const handleToggle = React.useCallback(() => {
    if (!isDisabled && editor) {
      return toggleMathBlock(editor);
    }
    return false;
  }, [editor, isDisabled]);

  const shortcutKey = "Ctrl-Alt-m";
  const label = "수식 블록";

  return {
    nodeInSchema,
    canToggle,
    isDisabled,
    isActive,
    shouldShow,
    handleToggle,
    shortcutKey,
    label,
  };
}

export const MathBlockButton = React.forwardRef<HTMLButtonElement, MathBlockButtonProps>(
  (
    {
      editor: providedEditor,
      text,
      hideWhenUnavailable = false,
      className = "",
      disabled,
      onClick,
      children,
      ...buttonProps
    },
    ref,
  ) => {
    const editor = useTiptapEditor(providedEditor);

    const { isDisabled, isActive, shouldShow, handleToggle, shortcutKey, label } = useMathBlockState(
      editor,
      disabled,
      hideWhenUnavailable,
    );

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);

        if (!e.defaultPrevented && !isDisabled) {
          handleToggle();
        }
      },
      [onClick, isDisabled, handleToggle],
    );

    if (!shouldShow || !editor || !editor.isEditable) {
      return null;
    }

    return (
      <Button
        type="button"
        className={className.trim()}
        disabled={isDisabled}
        data-style="ghost"
        data-active-state={isActive ? "on" : "off"}
        data-disabled={isDisabled}
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        role="button"
        tabIndex={-1}
        aria-label="mathBlock"
        aria-pressed={isActive}
        tooltip={label}
        shortcutKeys={shortcutKey}
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children || (
          <>
            <MathBlockIcon className="tiptap-button-icon" />
            {text && <span className="tiptap-button-text">{text}</span>}
          </>
        )}
      </Button>
    );
  },
);

MathBlockButton.displayName = "MathBlockButton";

export default MathBlockButton;
