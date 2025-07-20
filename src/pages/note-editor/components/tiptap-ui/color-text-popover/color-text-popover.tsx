import { type Editor, isNodeSelection } from "@tiptap/react";
import * as React from "react";

// --- Hooks ---
import { useMenuNavigation } from "../../../hooks/use-menu-navigation";
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor";

// --- Icons ---
import { BanIcon } from "../../tiptap-icons/ban-icon";
import { ChevronDownIcon } from "../../tiptap-icons/chevron-down-icon";
import { TextColorIcon } from "../../tiptap-icons/text-color-icon";

// --- Lib ---
import { isMarkInSchema } from "../../../lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "../../tiptap-ui-primitive/button";
import { Button } from "../../tiptap-ui-primitive/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../tiptap-ui-primitive/popover";
import { Separator } from "../../tiptap-ui-primitive/separator";

// --- Tiptap UI ---
import { ColorTextButton, canToggleTextColor } from "../../tiptap-ui/color-text-button";

// --- Styles ---
import "./color-text-popover.scss";

export interface ColorTextPopoverColor {
  label: string;
  value: string;
}

export interface ColorTextPopoverContentProps {
  editor?: Editor | null;
  colors?: ColorTextPopoverColor[];
  onClose?: () => void;
}

export interface ColorTextPopoverProps extends Omit<ButtonProps, "type"> {
  /** The TipTap editor instance. */
  editor?: Editor | null;
  /** The text colors to display in the popover. */
  colors?: ColorTextPopoverColor[];
  /** Whether to hide the text color popover when unavailable. */
  hideWhenUnavailable?: boolean;
}

export const DEFAULT_TEXT_COLORS: ColorTextPopoverColor[] = [
  { label: "Blue", value: "var(--color-text-blue)" },
  { label: "Ocean", value: "var(--color-text-ocean)" },
  { label: "Lavender", value: "var(--color-text-lavender)" },
  { label: "Mint", value: "var(--color-text-mint)" },
  { label: "Sage", value: "var(--color-text-sage)" },
  { label: "Orange", value: "var(--color-text-orange)" },
  { label: "Coral", value: "var(--color-text-coral)" },
  { label: "Rose", value: "var(--color-text-rose)" },
  { label: "Plum", value: "var(--color-text-plum)" },
  { label: "Gray", value: "var(--color-text-gray)" },
];

export const ColorTextPopoverButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      type="button"
      className={className}
      data-style="ghost"
      data-appearance="default"
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="button"
      tabIndex={-1}
      aria-label="Change text color"
      tooltip="Text Color"
      ref={ref}
      {...props}
    >
      {children || <TextColorIcon />}
    </Button>
  ),
);

ColorTextPopoverButton.displayName = "ColorTextPopoverButton";

export function ColorTextPopoverContent({
  editor: providedEditor,
  colors = DEFAULT_TEXT_COLORS,
  onClose,
}: ColorTextPopoverContentProps) {
  const editor = useTiptapEditor(providedEditor);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const removeTextColor = React.useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetColor().run();
    onClose?.();
  }, [editor, onClose]);

  const menuItems = React.useMemo(() => [...colors, { label: "Remove text color", value: "none" }], [colors]);

  const { selectedIndex } = useMenuNavigation({
    containerRef,
    items: menuItems,
    orientation: "both",
    onSelect: (item) => {
      if (item.value === "none") {
        removeTextColor();
      }
      onClose?.();
    },
    onClose,
    autoSelectFirstItem: false,
  });

  return (
    // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
    <div ref={containerRef} className="tiptap-color-text-content" tabIndex={0}>
      <div className="tiptap-button-group" data-orientation="horizontal">
        {colors.map((color, index) => (
          <ColorTextButton
            key={color.value}
            editor={editor}
            color={color.value}
            aria-label={`${color.label} text color`}
            tabIndex={index === selectedIndex ? 0 : -1}
            data-highlighted={selectedIndex === index}
            onClick={onClose}
          />
        ))}
      </div>

      <Separator />

      <div className="tiptap-button-group">
        <Button
          onClick={removeTextColor}
          aria-label="Remove text color"
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

export function ColorTextPopover({
  editor: providedEditor,
  colors = DEFAULT_TEXT_COLORS,
  hideWhenUnavailable = false,
  ...props
}: ColorTextPopoverProps) {
  const editor = useTiptapEditor(providedEditor);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const markAvailable = isMarkInSchema("textStyle", editor);

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

  const isActive = editor?.isActive("textStyle") ?? false;

  const shouldShow = React.useMemo(() => {
    if (!hideWhenUnavailable || !editor) return true;

    return !(isNodeSelection(editor.state.selection) || !canToggleTextColor(editor));
  }, [hideWhenUnavailable, editor]);

  if (!shouldShow || !editor || !editor.isEditable) {
    return null;
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <ColorTextPopoverButton
          disabled={isDisabled}
          data-active-state={isActive ? "on" : "off"}
          data-disabled={isDisabled}
          aria-pressed={isActive}
          {...props}
        >
          <TextColorIcon className="tiptap-button-icon" style={{ width: "2rem", height: "2rem" }} />
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </ColorTextPopoverButton>
      </PopoverTrigger>

      <PopoverContent aria-label="Text colors">
        <ColorTextPopoverContent editor={editor} colors={colors} onClose={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}

export default ColorTextPopover;
