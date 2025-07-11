import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

import { BlankCardIcon } from "../../tiptap-icons/blank-card-icon";
import { ImageCardIcon } from "../../tiptap-icons/image-card-icon";
// --- Icons ---
import { VocaCardIcon } from "../../tiptap-icons/voca-card-icon";

// --- Lib ---
import { isNodeInSchema } from "../../../lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";

export type Card = "voca" | "blank" | "image";

export interface CardButtonProps extends Omit<ButtonProps, "type"> {
  type: Card;
  editor?: Editor | null;
  text?: string;
  hideWhenUnavailable?: boolean;
}

export const cardIcons = {
  voca: VocaCardIcon,
  blank: BlankCardIcon,
  image: ImageCardIcon,
};

export const cardLabels: Record<Card, string> = {
  voca: "Voca Card",
  blank: "Blank Card",
  image: "Image Card",
};

/*
export const cardShortcutKeys: Partial<Record<Card, string>> = {
  voca: "",
  blank: "",
  image: "",
};
*/

export function canInsertCard(editor: Editor | null, type: Card): boolean {
  if (!editor) return false;
  // TODO: 실제 카드 삽입 가능 여부 체크 로직 구현
  console.log(`Checking if ${type} card can be inserted`);
  return true;
}

export function isCardActive(editor: Editor | null, type: Card): boolean {
  if (!editor) return false;
  // TODO: 실제 카드 활성 상태 체크 로직 구현
  console.log(`Checking if ${type} card is active`);
  return false;
}

export function insertCard(editor: Editor | null, type: Card): void {
  if (!editor) return;
  // TODO: 실제 카드 삽입 로직 구현
  console.log(`Inserting ${type} card`);
}

export function isCardButtonDisabled(editor: Editor | null, type: Card, userDisabled = false): boolean {
  if (!editor) return true;
  if (userDisabled) return true;
  if (!canInsertCard(editor, type)) return true;
  return false;
}

export function shouldShowCardButton(params: {
  editor: Editor | null;
  type: Card;
  hideWhenUnavailable: boolean;
  cardInSchema: boolean;
}): boolean {
  const { editor, type, hideWhenUnavailable, cardInSchema } = params;

  if (!cardInSchema || !editor) {
    return false;
  }

  if (hideWhenUnavailable) {
    if (isNodeSelection(editor.state.selection) || !canInsertCard(editor, type)) {
      return false;
    }
  }

  return true;
}

export function getFormattedCardName(type: Card): string {
  return cardLabels[type];
}

export function useCardState(editor: Editor | null, type: Card, disabled = false) {
  // 임시 "paragraph" 사용
  const cardInSchema = isNodeInSchema("paragraph", editor);
  const isDisabled = isCardButtonDisabled(editor, type, disabled);
  const isActive = isCardActive(editor, type);

  const Icon = cardIcons[type];
  const formattedName = getFormattedCardName(type);

  return {
    cardInSchema,
    isDisabled,
    isActive,
    Icon,
    formattedName,
  };
}

export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  (
    {
      editor: providedEditor,
      type,
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

    const { cardInSchema, isDisabled, isActive, Icon, formattedName } = useCardState(editor, type, disabled);

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);

        if (!e.defaultPrevented && !isDisabled && editor) {
          insertCard(editor, type);
        }
      },
      [onClick, isDisabled, editor, type],
    );

    const show = React.useMemo(() => {
      return shouldShowCardButton({
        editor,
        type,
        hideWhenUnavailable,
        cardInSchema,
      });
    }, [editor, type, hideWhenUnavailable, cardInSchema]);

    if (!show || !editor || !editor.isEditable) {
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
        aria-label={type}
        aria-pressed={isActive}
        tooltip={formattedName}
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children || (
          <>
            <Icon className="tiptap-button-icon" />
            {text && <span className="tiptap-button-text">{text}</span>}
          </>
        )}
      </Button>
    );
  },
);

CardButton.displayName = "CardButton";

export default CardButton;
