import { addNote } from "@apis/note/note";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UseAddNoteOptions {
  folderId: number;
}

export const useAddNote = ({ folderId }: UseAddNoteOptions) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddNote = async (_noteName: string) => {
    // TODO: 서버 수정 후 noteName을 함께 전달하도록 변경 필요
    setIsAdding(true);
    try {
      const response = await addNote({ folderId });
      setIsModalOpen(false);
      navigate(`/note-editor/${folderId}/${response.noteId}`);
    } catch (error) {
      console.error("노트 생성 실패:", error);
      alert("노트 생성에 실패했습니다.");
    } finally {
      setIsAdding(false);
    }
  };

  return {
    isModalOpen,
    isAdding,
    openModal,
    closeModal,
    handleAddNote,
  };
};
