import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useMenuNavigation } from "../../../hooks/use-menu-navigation";
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

// --- Icons ---
import { BanIcon } from "../../tiptap-icons/ban-icon";
import { ChevronDownIcon } from "../../tiptap-icons/chevron-down-icon";
import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon";

// --- Lib ---
import { isMarkInSchema } from "../../../lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../tiptap-ui-primitive/popover";
import { Separator } from "../../tiptap-ui-primitive/separator";

// --- Tiptap UI ---
import { ColorHighlightButton, canToggleHighlight } from "../../tiptap-ui/color-highlight-button";

// --- Styles ---
import "./color-highlight-popover.scss";

export interface ColorHighlightPopoverColor {
  label: string;
  value: string;
  border?: string;
}

export interface ColorHighlightPopoverContentProps {
  editor?: Editor | null;
  colors?: ColorHighlightPopoverColor[];
  onClose?: () => void;
}

export interface ColorHighlightPopoverProps extends Omit<ButtonProps, "type"> {
  /** The TipTap editor instance. */
  editor?: Editor | null;
  /** The highlight colors to display in the popover. */
  colors?: ColorHighlightPopoverColor[];
  /** Whether to hide the highlight popover when unavailable. */
  hideWhenUnavailable?: boolean;
}

export const DEFAULT_HIGHLIGHT_COLORS: ColorHighlightPopoverColor[] = [
  {
    label: "Blue",
    value: "var(--color-highlight-blue)",
    border: "var(--color-highlight-blue-contrast)",
  },
  {
    label: "Ocean",
    value: "var(--color-highlight-ocean)",
    border: "var(--color-highlight-ocean-contrast)",
  },
  {
    label: "Lavender",
    value: "var(--color-highlight-lavender)",
    border: "var(--color-highlight-lavender-contrast)",
  },
  {
    label: "Mint",
    value: "var(--color-highlight-mint)",
    border: "var(--color-highlight-mint-contrast)",
  },
  {
    label: "Sage",
    value: "var(--color-highlight-sage)",
    border: "var(--color-highlight-sage-contrast)",
  },
  {
    label: "Orange",
    value: "var(--color-highlight-orange)",
    border: "var(--color-highlight-orange-contrast)",
  },
  {
    label: "Coral",
    value: "var(--color-highlight-coral)",
    border: "var(--color-highlight-coral-contrast)",
  },
  {
    label: "Rose",
    value: "var(--color-highlight-rose)",
    border: "var(--color-highlight-rose-contrast)",
  },
  {
    label: "Plum",
    value: "var(--color-highlight-plum)",
    border: "var(--color-highlight-plum-contrast)",
  },
  {
    label: "Gray",
    value: "var(--color-highlight-gray)",
    border: "var(--color-highlight-gray-contrast)",
  },
];

export const ColorHighlightPopoverButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      type="button"
      className={className}
      data-style="ghost"
      data-appearance="default"
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="button"
      tabIndex={-1}
      aria-label="Highlight text"
      tooltip="형광펜"
      ref={ref}
      {...props}
    >
      {children || <HighlighterIcon className="tiptap-button-icon" />}
    </Button>
  ),
);

ColorHighlightPopoverButton.displayName = "ColorHighlightPopoverButton";

export function ColorHighlightPopoverContent({
  editor: providedEditor,
  colors = DEFAULT_HIGHLIGHT_COLORS,
  onClose,
}: ColorHighlightPopoverContentProps) {
  const editor = useTiptapEditor(providedEditor);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const removeHighlight = React.useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetMark("highlight").run();
    onClose?.();
  }, [editor, onClose]);

  const menuItems = React.useMemo(() => [...colors, { label: "Remove highlight", value: "none" }], [colors]);

  const { selectedIndex } = useMenuNavigation({
    containerRef,
    items: menuItems,
    orientation: "both",
    onSelect: (item) => {
      if (item.value === "none") {
        removeHighlight();
      }
      onClose?.();
    },
    onClose,
    autoSelectFirstItem: false,
  });

  return (
    // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
    <div ref={containerRef} className="tiptap-color-highlight-content" tabIndex={0}>
      <div className="tiptap-button-group" data-orientation="horizontal">
        {colors.map((color, index) => (
          <ColorHighlightButton
            key={color.value}
            editor={editor}
            color={color.value}
            aria-label={`${color.label} highlight color`}
            tabIndex={index === selectedIndex ? 0 : -1}
            data-highlighted={selectedIndex === index}
            onClick={onClose}
          />
        ))}
      </div>

      <Separator />

      <div className="tiptap-button-group">
        <Button
          onClick={removeHighlight}
          aria-label="Remove highlight"
          tabIndex={selectedIndex === colors.length ? 0 : -1}
          type="button"
          role="menuitem"
          data-style="ghost"
          data-highlighted={selectedIndex === colors.length}
        >
          <BanIcon className="tiptap-button-icon" />
        </Button>
      </div>
    </div>
  );
}

export function ColorHighlightPopover({
  editor: providedEditor,
  colors = DEFAULT_HIGHLIGHT_COLORS,
  hideWhenUnavailable = false,
  ...props
}: ColorHighlightPopoverProps) {
  const editor = useTiptapEditor(providedEditor);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const markAvailable = isMarkInSchema("highlight", editor);

  React.useEffect(() => {
    if (!editor) return;

    const updateIsDisabled = () => {
      let isDisabled = false;

      if (!markAvailable || !editor) {
        isDisabled = true;
      }

      const isInCompatibleContext =
        editor.isActive("code") || editor.isActive("codeBlock") || editor.isActive("imageUpload");

      if (isInCompatibleContext) {
        isDisabled = true;
      }

      setIsDisabled(isDisabled);
    };

    editor.on("selectionUpdate", updateIsDisabled);
    editor.on("update", updateIsDisabled);

    return () => {
      editor.off("selectionUpdate", updateIsDisabled);
      editor.off("update", updateIsDisabled);
    };
  }, [editor, markAvailable]);

  const isActive = editor?.isActive("highlight") ?? false;

  const shouldShow = React.useMemo(() => {
    if (!hideWhenUnavailable || !editor) return true;

    return !(isNodeSelection(editor.state.selection) || !canToggleHighlight(editor));
  }, [hideWhenUnavailable, editor]);

  if (!shouldShow || !editor || !editor.isEditable) {
    return null;
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <ColorHighlightPopoverButton
          disabled={isDisabled}
          data-active-state={isActive ? "on" : "off"}
          data-disabled={isDisabled}
          aria-pressed={isActive}
          {...props}
        >
          <HighlighterIcon className="tiptap-button-icon" style={{ width: "2rem", height: "2rem" }} />
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </ColorHighlightPopoverButton>
      </PopoverTrigger>

      <PopoverContent aria-label="Highlight colors">
        <ColorHighlightPopoverContent editor={editor} colors={colors} onClose={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}

export default ColorHighlightPopover;
