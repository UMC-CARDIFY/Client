import { Modal } from "@components/common/Modal";
import React from "react";

interface DeleteFolderProps {
  isOpen: boolean;
  onClose: () => void; // 취소 버튼 클릭 핸들러
  onSubmit: () => void; // 확인 버튼 클릭 핸들러
  folderName: string;
}

export const DeleteFolder: React.FC<DeleteFolderProps> = ({ isOpen, onClose, onSubmit, folderName }) => {
  return (
    <Modal
      isOpen={isOpen}
      title="폴더 삭제"
      description={
        <>
          <p>‘{folderName}’을 삭제하시겠습니까?</p>
          <p>이 폴더 안의 노트가 함께 삭제됩니다.</p>
        </>
      }
      onClose={onClose}
      onSubmit={onSubmit}
      cancelText="취소"
      confirmText="확인"
    />
  );
};
