import { getNote, writeNote } from "@apis/note/note";
import { Editor } from "@tiptap/react";
import { NoteContent, WriteNoteRequest } from "@typedefs";
import { transformContentForApi, transformContentFromApi } from "@utils/note-content-transformer";
import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";

interface NoteEditorContextType {
  noteId: number;
  folderId: number;
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
  folderId: number;
}

export const NoteEditorProvider: React.FC<NoteEditorProviderProps> = ({ children, noteId, folderId }) => {
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
          // 백엔드 형식을 TipTap 형식으로 역변환
          const transformedContent = transformContentFromApi(content as NoteContent);
          console.log("=== 변환된 노트 콘텐츠 ===", transformedContent);
          setInitialContent(transformedContent);
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
      // TipTap JSON을 백엔드 API 형식으로 변환
      const transformedContent = transformContentForApi(editorContent);

      const request: WriteNoteRequest = {
        noteId,
        name: title || "제목 없음",
        // TODO: mode 값 - "light" / "standard"
        mode: "standard",
        contents: transformedContent,
      };

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
        folderId,
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
