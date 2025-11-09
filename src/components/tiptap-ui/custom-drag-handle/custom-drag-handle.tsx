import { Fragment, Node as ProsemirrorNode, Slice } from "@tiptap/pm/model";
import { TextSelection } from "@tiptap/pm/state";
import { dropPoint } from "@tiptap/pm/transform";
import { type Editor } from "@tiptap/react";
import * as React from "react";

import { GripVerticalIcon } from "../../../pages/note-editor/components/tiptap-icons/grip-vertical-icon.tsx";
import { Button } from "../../../pages/note-editor/components/tiptap-ui-primitive/button";

interface CustomDragHandleProps {
  editor: Editor;
  onContextMenu?: (node: ProsemirrorNode, pos: number) => void;
}

interface BlockInfo {
  node: ProsemirrorNode;
  pos: number;
  dom: HTMLElement;
  rect: DOMRect;
}

export const CustomDragHandle = ({ editor, onContextMenu }: CustomDragHandleProps) => {
  const [blocks, setBlocks] = React.useState<BlockInfo[]>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragData, setDragData] = React.useState<{
    sourcePos: number;
    sourceNode: ProsemirrorNode;
  } | null>(null);

  const handleRef = React.useRef<HTMLDivElement>(null);

  // 모든 블록 찾기
  const findAllBlocks = React.useCallback((): BlockInfo[] => {
    const blocks: BlockInfo[] = [];
    const { doc } = editor.state;

    doc.descendants((node, pos) => {
      if (node.isBlock && node.type.name !== "doc") {
        const dom = editor.view.nodeDOM(pos) as HTMLElement;
        if (dom) {
          const rect = dom.getBoundingClientRect();
          blocks.push({ node, pos, dom, rect });
        }
      }
      return true;
    });

    return blocks;
  }, [editor]);

  // 현재 마우스 위치에서 블록 찾기 (드롭 시에만 사용)
  const findBlockAtPos = React.useCallback(
    (clientX: number, clientY: number): BlockInfo | null => {
      const pos = editor.view.posAtCoords({ left: clientX, top: clientY });
      if (!pos) return null;

      const $pos = editor.state.doc.resolve(pos.pos);
      let depth = $pos.depth;

      // 블록 레벨 노드 찾기
      while (depth > 0) {
        const node = $pos.node(depth);
        const nodePos = $pos.before(depth);

        if (node.isBlock && node.type.name !== "doc") {
          const dom = editor.view.nodeDOM(nodePos) as HTMLElement;
          if (dom) {
            const rect = dom.getBoundingClientRect();
            return { node, pos: nodePos, dom, rect };
          }
        }
        depth--;
      }

      return null;
    },
    [editor],
  );

  // 블록 업데이트
  const updateBlocks = React.useCallback(() => {
    const newBlocks = findAllBlocks();
    setBlocks(newBlocks);
  }, [findAllBlocks]);

  // 드래그 시작
  const handleDragStart = React.useCallback(
    (block: BlockInfo) => (event: React.DragEvent) => {
      setIsDragging(true);
      setDragData({
        sourcePos: block.pos,
        sourceNode: block.node,
      });

      // 드래그 이미지 설정
      const dragImage = block.dom.cloneNode(true) as HTMLElement;
      Object.assign(dragImage.style, {
        position: "fixed",
        top: "-10000px",
        left: "-10000px",
        opacity: "0.6",
        pointerEvents: "none",
      });
      document.body.appendChild(dragImage);
      event.dataTransfer.setDragImage(dragImage, 0, 0);

      try {
        event.dataTransfer.setData("text/plain", "");
      } catch {
        // Ignore error
      }

      // 정리
      setTimeout(() => {
        document.body.removeChild(dragImage);
      }, 0);

      event.dataTransfer.effectAllowed = "move";
    },
    [],
  );

  // 드래그 엔드
  const handleDragEnd = React.useCallback(() => {
    setIsDragging(false);
    setDragData(null);
  }, []);

  // 드롭 오버
  const handleDragOver = React.useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer!.dropEffect = "move";
  }, []);

  // 드롭
  const handleDrop = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault();

      if (!dragData) return;

      const dropPos = editor.view.posAtCoords({
        left: event.clientX,
        top: event.clientY,
      });

      if (!dropPos) return;

      const { sourcePos, sourceNode } = dragData;
      let targetPos = dropPos.pos;

      // 같은 위치면 무시
      if (Math.abs(sourcePos - targetPos) < sourceNode.nodeSize) {
        setIsDragging(false);
        setDragData(null);
        return;
      }

      // 타겟 위치 조정
      if (targetPos > sourcePos) {
        targetPos -= sourceNode.nodeSize;
      }

      // 안전한 드롭 지점 계산 후 이동
      let tr = editor.state.tr;
      tr.delete(sourcePos, sourcePos + sourceNode.nodeSize);
      const docAfterDelete = tr.doc;
      const slice = new Slice(Fragment.from(sourceNode), 0, 0);
      const safePos = dropPoint(docAfterDelete, targetPos, slice);

      if (safePos == null) {
        // 삽입 불가 지점이면 삭제만 취소
        setIsDragging(false);
        setDragData(null);
        return;
      }

      tr = tr.insert(safePos, sourceNode);
      editor.view.dispatch(tr);

      setIsDragging(false);
      setDragData(null);
    },
    [editor, dragData],
  );

  // 컨텍스트 메뉴
  const handleContextMenu = React.useCallback(
    (block: BlockInfo) => (event: React.MouseEvent) => {
      if (onContextMenu) {
        event.preventDefault();
        onContextMenu(block.node, block.pos);
      }
    },
    [onContextMenu],
  );

  // 에디터 변경 감지 및 블록 업데이트
  React.useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      updateBlocks();
    };

    // 초기 블록 로드
    updateBlocks();

    // 에디터 변경 감지
    editor.on("transaction", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate);

    return () => {
      editor.off("transaction", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [editor, updateBlocks]);

  // 이벤트 리스너 등록
  React.useEffect(() => {
    const editorElement = editor.view.dom.parentElement;
    if (!editorElement) return;

    editorElement.addEventListener("dragover", handleDragOver);
    editorElement.addEventListener("drop", handleDrop);

    return () => {
      editorElement.removeEventListener("dragover", handleDragOver);
      editorElement.removeEventListener("drop", handleDrop);
    };
  }, [editor, handleDragOver, handleDrop]);

  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={`${block.pos}-${index}`}
          style={{
            position: "fixed",
            left: block.rect.left - 40,
            top: block.rect.top,
            height: block.rect.height,
            display: "flex",
            alignItems: "center",
            zIndex: 10,
            opacity: isDragging ? 0.5 : 1,
            transition: "opacity 0.1s ease",
            pointerEvents: "auto",
          }}
          onContextMenu={handleContextMenu(block)}
        >
          <Button
            data-style="ghost"
            data-weight="small"
            draggable
            onDragStart={handleDragStart(block)}
            onDragEnd={handleDragEnd}
            style={{
              cursor: "grab",
              padding: "4px",
              minHeight: "24px",
              minWidth: "24px",
            }}
            onMouseDown={() => {
              // 노드 선택
              const tr = editor.state.tr;
              const $pos = editor.state.doc.resolve(block.pos);
              tr.setSelection(TextSelection.near($pos));
              editor.view.dispatch(tr);
            }}
          >
            <GripVerticalIcon className="tiptap-button-icon" style={{ width: "16px", height: "16px" }} />
          </Button>
        </div>
      ))}
    </>
  );
};
