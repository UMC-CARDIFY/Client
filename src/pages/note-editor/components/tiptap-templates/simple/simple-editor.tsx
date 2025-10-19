import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import * as React from "react";

import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Typography } from "@tiptap/extension-typography";
import { Underline } from "@tiptap/extension-underline";
// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";

import { CodeBlockExtension } from "../../code-block";
// --- Custom Extensions ---
import { Link } from "../../tiptap-extension/link-extension";
import { Selection } from "../../tiptap-extension/selection-extension";
import { TrailingNode } from "../../tiptap-extension/trailing-node-extension";

// --- UI Primitives ---
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "../../../components/tiptap-ui-primitive/toolbar";
import { Button } from "../../tiptap-ui-primitive/button";
import { Spacer } from "../../tiptap-ui-primitive/spacer";

// --- Tiptap Node ---
import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension";
import "../../tiptap-node/code-block-node/code-block-node.scss";
import "../../tiptap-node/list-node/list-node.scss";
import "../../tiptap-node/image-node/image-node.scss";
import "../../tiptap-node/paragraph-node/paragraph-node.scss";
import "../../tiptap-ui/search-note/search-note.scss";

// --- Tiptap UI ---
import { CardButton } from "../../tiptap-ui/card-button";
import { CodeBlockButton } from "../../tiptap-ui/code-block-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverButton,
  ColorHighlightPopoverContent,
} from "../../tiptap-ui/color-highlight-popover";
import { ColorTextPopover } from "../../tiptap-ui/color-text-popover";
import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu";
import { LinkContent } from "../../tiptap-ui/link-popover";
//import { LinkButton, LinkPopover } from "../../tiptap-ui/link-popover";

import { ListButton } from "../../tiptap-ui/list-button";
import { MarkButton } from "../../tiptap-ui/mark-button";
import { MathBlockButton } from "../../tiptap-ui/math-block-button";
import { SearchNote } from "../../tiptap-ui/search-note/search-note";

// --- Icons ---
import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon";
import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon";
import { LinkIcon } from "../../tiptap-icons/link-icon";

import { CustomDragHandle } from "../../../../../components/tiptap-ui/custom-drag-handle";
// --- Components ---
import { EditorTitle } from "./editor-title";

// --- Hooks ---
import { useCursorVisibility } from "../../../hooks/use-cursor-visibility";
import { useMobile } from "../../../hooks/use-mobile";
import { useWindowSize } from "../../../hooks/use-window-size";

// --- Lib ---
import { MAX_FILE_SIZE, handleImageUpload } from "../../../lib/tiptap-utils";

// --- Styles ---
import "./simple-editor.scss";
import "./editor-title/editor-title.scss";
import "../../code-block/code-block.scss";

const MainToolbarContent = ({
  onHighlighterClick,
  //onLinkClick,
  isMobile,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3]} />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="underline" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        {/*}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
        */}
        <ListButton type="bulletList" />
        <ListButton type="orderedList" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ColorTextPopover />
        {!isMobile ? <ColorHighlightPopover /> : <ColorHighlightPopoverButton onClick={onHighlighterClick} />}
      </ToolbarGroup>
      <ToolbarSeparator />

      <ToolbarGroup>
        <CodeBlockButton />
        <MathBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />
      <ToolbarGroup>
        <CardButton type="voca" />
        <CardButton type="blank" />
        <CardButton type="image" />
        {/*<ImageUploadButton text="Add" />*/}
      </ToolbarGroup>

      <ToolbarSeparator />
      <Spacer />

      <ToolbarGroup>
        <SearchNote placeholder="노트 내 검색" />
      </ToolbarGroup>
      {/* 
      <ToolbarSeparator />
      <ToolbarGroup>
        <Button
          data-style="ghost"
          onClick={() => {
            if (window.confirm("콘솔에 JSON 데이터를 출력하시겠습니까?")) {
              const editor = (window as any).__EDITOR__;
              if (editor) {
                const editorData = {
                  title: (document.querySelector(".editor-title input") as HTMLInputElement)?.value || "",
                  content: editor.getHTML(),
                  jsonContent: editor.getJSON(),
                  textContent: editor.getText(),
                };
                console.log("Editor Data (JSON):", JSON.stringify(editorData, null, 2));
                alert("콘솔을 확인하세요! (개발자 도구 > Console)");
              }
            }
          }}
        >
          JSON
        </Button>
      </ToolbarGroup> */}
    </>
  );
};

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? <ColorHighlightPopoverContent /> : <LinkContent />}
  </>
);

export function SimpleEditor() {
  const isMobile = useMobile();
  const windowSize = useWindowSize();
  const [mobileView, setMobileView] = React.useState<"main" | "highlighter" | "link">("main");
  const [title, setTitle] = React.useState<string>(""); // 제목 상태 추가
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
      },
    },
    extensions: [
      StarterKit.configure({
        blockquote: false,
        codeBlock: false,
      }),
      Placeholder.configure({
        placeholder: "내용을 입력하세요.",
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Image,
      Color,
      TextStyle,
      Typography,
      Selection,
      CodeBlockExtension,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
      TrailingNode,
      Link.configure({ openOnClick: false }),
    ],
    content: "",
  });

  const bodyRect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  });

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  // 에디터 인스턴스를 전역에 저장 (디버깅용)
  // React.useEffect(() => {
  //   if (editor) {
  //     (window as any).__EDITOR__ = editor;
  //   }
  // }, [editor]);

  return (
    <EditorContext.Provider value={{ editor }}>
      <Toolbar
        ref={toolbarRef}
        style={
          isMobile
            ? {
                bottom: `calc(100% - ${windowSize.height - bodyRect.y}px)`,
              }
            : {}
        }
      >
        {mobileView === "main" ? (
          <MainToolbarContent
            onHighlighterClick={() => setMobileView("highlighter")}
            onLinkClick={() => setMobileView("link")}
            isMobile={isMobile}
          />
        ) : (
          <MobileToolbarContent
            type={mobileView === "highlighter" ? "highlighter" : "link"}
            onBack={() => setMobileView("main")}
          />
        )}
      </Toolbar>

      <div className="content-wrapper">
        <div className="simple-editor-content" style={{ position: "relative" }}>
          <EditorTitle title={title} onTitleChange={handleTitleChange} />
          <EditorContent editor={editor} role="presentation" />
          {editor && <CustomDragHandle editor={editor} />}
        </div>
      </div>
    </EditorContext.Provider>
  );
}
