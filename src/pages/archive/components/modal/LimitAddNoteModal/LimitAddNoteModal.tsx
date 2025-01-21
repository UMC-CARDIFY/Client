import { Modal } from "@components/common/Modal";
import React from "react";

interface LimitAddNoteModalProps {
  isOpen: boolean; // 모달 열림 상태
  onClose: () => void; // 돌아가기 버튼 핸들러
  onPay: () => void; // 결제하기 버튼 핸들러
}

export const LimitAddNoteModal: React.FC<LimitAddNoteModalProps> = ({ isOpen, onClose, onPay }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="노트 추가 제한"
      description={<>추가할 수 있는 노트의 개수를 초과했습니다.</>}
      onClose={onClose}
      onSubmit={onPay}
      cancelText="돌아가기"
      confirmText="결제하기"
    />
  );
};