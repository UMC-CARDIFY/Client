import { Modal } from "@components/common/Modal";
import { truncate } from "@utils/truncate";
import React from "react";

interface DeleteNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  noteId: number;
  noteName: string;
  additionalCount: number;
}

export const DeleteNoteModal: React.FC<DeleteNoteModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  noteName,
  additionalCount,
}) => {
  const displayName = truncate(noteName, 14);
  const isMulti = additionalCount > 0;

  return (
    <Modal
      isOpen={isOpen}
      title="노트 삭제"
      description={
        <>
          <p>
            {isMulti ? (
              <>
                ‘{displayName}’ 외 {additionalCount}개의 노트를 삭제하시겠습니까?
              </>
            ) : (
              <>‘{displayName}’을(를) 삭제하시겠습니까?</>
            )}
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
