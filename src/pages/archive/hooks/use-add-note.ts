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

  const handleAddNote = async (noteName: string) => {
    setIsAdding(true);
    try {
      const response = await addNote({ folderId, name: noteName });
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
