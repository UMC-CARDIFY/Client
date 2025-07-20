"use client";

import type { Node } from "@tiptap/pm/model";
import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

// --- Lib ---
import { findNodePosition, isEmptyNode, isMarkInSchema } from "../../../lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";

// --- Styles ---
import "./color-text-button.scss";

export const TEXT_COLORS = [
  {
    label: "Default text color",
    value: "inherit",
  },
  {
    label: "Blue text color",
    value: "var(--color-text-blue)",
  },
  {
    label: "Ocean text color",
    value: "var(--color-text-ocean)",
  },
  {
    label: "Lavender text color",
    value: "var(--color-text-lavender)",
  },
  {
    label: "Mint text color",
    value: "var(--color-text-mint)",
  },
  {
    label: "Sage text color",
    value: "var(--color-text-sage)",
  },
  {
    label: "Gray text color",
    value: "var(--color-text-gray)",
  },
  {
    label: "Orange text color",
    value: "var(--color-text-orange)",
  },
  {
    label: "Coral text color",
    value: "var(--color-text-coral)",
  },
  {
    label: "Rose text color",
    value: "var(--color-text-rose)",
  },
  {
    label: "Plum text color",
    value: "var(--color-text-plum)",
  },
];

export interface ColorTextButtonProps extends Omit<ButtonProps, "type"> {
  /**
   * The TipTap editor instance.
   */
  editor?: Editor | null;
  /**
   * The node to apply text color to
   */
  node?: Node | null;
  /**
   * The position of the node in the document
   */
  nodePos?: number | null;
  /**
   * The color to apply when toggling the text color.
   */
  color: string;
  /**
   * Optional text to display alongside the icon.
   */
  text?: string;
  /**
   * Whether the button should hide when the mark is not available.
   * @default false
   */
  hideWhenUnavailable?: boolean;
  /**
   * Called when the text color is applied.
   */
  onApplied?: (color: string) => void;
}

/**
 * Checks if text color can be toggled in the current editor state
 */
export function canToggleTextColor(editor: Editor | null): boolean {
  if (!editor) return false;
  try {
    return editor.can().setColor("");
  } catch {
    return false;
  }
}

/**
 * Checks if text color is active in the current selection
 */
export function isTextColorActive(editor: Editor | null, color: string): boolean {
  if (!editor) return false;
  return editor.isActive("textStyle", { color });
}

/**
 * Toggles text color on the current selection or specified node
 */
export function toggleTextColor(
  editor: Editor | null,
  color: string,
  node?: Node | null,
  nodePos?: number | null,
): void {
  if (!editor) return;

  try {
    const chain = editor.chain().focus();

    if (color === "inherit") {
      // Remove text color
      chain.unsetColor().run();
      return;
    }

    if (isEmptyNode(node)) {
      chain.setColor(color).run();
    } else if (nodePos !== undefined && nodePos !== null && nodePos !== -1) {
      chain.setNodeSelection(nodePos).setColor(color).run();
    } else if (node) {
      const foundPos = findNodePosition({ editor, node });
      if (foundPos) {
        chain.setNodeSelection(foundPos.pos).setColor(color).run();
      } else {
        chain.setColor(color).run();
      }
    } else {
      chain.setColor(color).run();
    }
  } catch (error) {
    console.error("Failed to apply text color:", error);
  }
}

/**
 * Determines if the text color button should be disabled
 */
export function isColorTextButtonDisabled(editor: Editor | null, userDisabled = false): boolean {
  if (!editor || userDisabled) return true;

  const isIncompatibleContext =
    editor.isActive("code") || editor.isActive("codeBlock") || editor.isActive("imageUpload");

  return isIncompatibleContext || !canToggleTextColor(editor);
}

/**
 * Determines if the text color button should be shown
 */
export function shouldShowColorTextButton(
  editor: Editor | null,
  hideWhenUnavailable: boolean,
  textStyleInSchema: boolean,
): boolean {
  if (!textStyleInSchema || !editor) return false;

  if (hideWhenUnavailable) {
    if (isNodeSelection(editor.state.selection) || !canToggleTextColor(editor)) {
      return false;
    }
  }

  return true;
}

/**
 * Custom hook to manage text color button state
 */
export function useTextColorState(editor: Editor | null, color: string, disabled = false, hideWhenUnavailable = false) {
  const textStyleInSchema = isMarkInSchema("textStyle", editor);
  const isDisabled = isColorTextButtonDisabled(editor, disabled);
  const isActive = isTextColorActive(editor, color);

  const shouldShow = React.useMemo(
    () => shouldShowColorTextButton(editor, hideWhenUnavailable, textStyleInSchema),
    [editor, hideWhenUnavailable, textStyleInSchema],
  );

  return {
    textStyleInSchema,
    isDisabled,
    isActive,
    shouldShow,
  };
}

/**
 * ColorTextButton component for TipTap editor
 */
export const ColorTextButton = React.forwardRef<HTMLButtonElement, ColorTextButtonProps>(
  (
    {
      editor: providedEditor,
      node,
      nodePos,
      color,
      text,
      hideWhenUnavailable = false,
      className = "",
      disabled,
      onClick,
      onApplied,
      children,
      style,
      ...buttonProps
    },
    ref,
  ) => {
    const editor = useTiptapEditor(providedEditor);
    const { isDisabled, isActive, shouldShow } = useTextColorState(editor, color, disabled, hideWhenUnavailable);

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);

        if (!e.defaultPrevented && !isDisabled && editor) {
          toggleTextColor(editor, color, node, nodePos);
          onApplied?.(color);
        }
      },
      [color, editor, isDisabled, node, nodePos, onClick, onApplied],
    );

    const buttonStyle = React.useMemo(
      () =>
        ({
          ...style,
          "--text-color": color,
        }) as React.CSSProperties,
      [color, style],
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
        aria-label={`${color} text color`}
        aria-pressed={isActive}
        onClick={handleClick}
        style={buttonStyle}
        {...buttonProps}
        ref={ref}
      >
        {children || (
          <>
            <span className="tiptap-button-text-color" style={{ "--text-color": color } as React.CSSProperties} />
            {text && <span className="tiptap-button-text">{text}</span>}
          </>
        )}
      </Button>
    );
  },
);

ColorTextButton.displayName = "ColorTextButton";

export default ColorTextButton;
