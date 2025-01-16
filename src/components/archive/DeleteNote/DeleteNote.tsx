import { Modal } from "@components/common/Modal";
import React from "react";

interface DeleteNoteProps {
  isOpen: boolean;
  onClose: () => void; // 취소 버튼 클릭 핸들러
  onSubmit: () => void; // 확인 버튼 클릭 핸들러
  noteName: string; // 대표 노트 이름
  additionalCount: number; // 추가로 삭제되는 노트 개수
}

export const DeleteNote: React.FC<DeleteNoteProps> = ({ isOpen, onClose, onSubmit, noteName, additionalCount }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="노트 삭제"
      description={
        <>
          <p>
            '{noteName}'{additionalCount > 0 && ` 외 ${additionalCount}개의 노트`}를 삭제하시겠습니까?
          </p>
          <p>이 노트 안의 플래시카드가 함께 삭제됩니다.</p>
        </>
      }
      onClose={onClose}
      onSubmit={onSubmit}
      cancelText="취소"
      confirmText="확인"
    />
  );
};
