import { getNote, writeNote } from "@apis/note/note";
import { Editor } from "@tiptap/react";
import { NoteContent, WriteNoteRequest } from "@typedefs";
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";

interface NoteEditorContextType {
  noteId: number;
  title: string;
  setTitle: (title: string) => void;
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  isLoading: boolean;
  isSaving: boolean;
  saveNote: () => Promise<boolean>;
  initialContent: NoteContent | null;
}

const NoteEditorContext = createContext<NoteEditorContextType | undefined>(undefined);

export const useNoteEditor = () => {
  const context = useContext(NoteEditorContext);
  if (!context) {
    throw new Error("useNoteEditor must be used within NoteEditorProvider");
  }
  return context;
};

interface NoteEditorProviderProps {
  children: ReactNode;
  noteId: number;
}

export const NoteEditorProvider: React.FC<NoteEditorProviderProps> = ({ children, noteId }) => {
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState<Editor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [initialContent, setInitialContent] = useState<NoteContent | null>(null);

  // 노트 내용 불러오기
  useEffect(() => {
    const fetchNoteContent = async () => {
      setIsLoading(true);
      try {
        const response = await getNote({ noteId });
        console.log("=== 노트 조회 응답 ===", response);

        if (response.noteName) {
          setTitle(response.noteName);
        }

        if (response.noteContent) {
          // noteContent가 문자열이면 파싱, 객체면 그대로 사용
          const content =
            typeof response.noteContent === "string" ? JSON.parse(response.noteContent) : response.noteContent;
          console.log("=== 파싱된 노트 콘텐츠 ===", content);
          setInitialContent(content as NoteContent);
        }
      } catch (error) {
        console.error("노트 조회 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoteContent();
  }, [noteId]);

  const saveNote = useCallback(async (): Promise<boolean> => {
    if (!editor) {
      console.error("Editor is not initialized");
      return false;
    }

    setIsSaving(true);

    try {
      const editorContent = editor.getJSON() as NoteContent;

      const request: WriteNoteRequest = {
        noteId,
        name: title || "제목 없음",
        // TODO: mode 값 - "light" / "standard"
        mode: "standard",
        contents: editorContent,
      };

      // 디버깅: 전송되는 데이터 확인
      // console.log("=== 노트 저장 요청 데이터 ===");
      // console.log("noteId:", noteId);
      // console.log("name:", request.name);
      // console.log("mode:", request.mode);
      // console.log("contents:", JSON.stringify(editorContent, null, 2));
      // console.log("==============================");

      // TODO: 이미지 파일 처리 로직 추가 필요
      const response = await writeNote(request);

      if (response.isSuccess) {
        console.log("노트 저장 성공");
        return true;
      }
      console.error("노트 저장 실패");
      return false;
    } catch (error) {
      console.error("노트 저장 중 오류 발생:", error);
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [editor, noteId, title]);

  return (
    <NoteEditorContext.Provider
      value={{
        noteId,
        title,
        setTitle,
        editor,
        setEditor,
        isLoading,
        isSaving,
        saveNote,
        initialContent,
      }}
    >
      {children}
    </NoteEditorContext.Provider>
  );
};
