import { Modal } from "@components/common/Modal";
import { truncate } from "@utils/truncate"; // ✅ 추가
import React from "react";
import { useDeleteFolderMutation } from "../../../hooks/use-archive-folder";

interface DeleteFolderModalProps {
  folderId: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  folderName: string;
}

export const DeleteFolderModal: React.FC<DeleteFolderModalProps> = ({
  folderId,
  isOpen,
  onClose,
  onSubmit,
  folderName,
}) => {
  const deleteFolderMutation = useDeleteFolderMutation();

  const handleDeleteFolder = async () => {
    try {
      await deleteFolderMutation.mutateAsync(folderId);
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const displayName = truncate(folderName, 16);

  return (
    <Modal
      isOpen={isOpen}
      title="폴더 삭제"
      description={
        <>
          <p>‘{displayName}’을(를) 삭제하시겠습니까?</p>
          <p>이 폴더 안의 노트가 함께 삭제됩니다.</p>
        </>
      }
      onClose={onClose}
      onSubmit={handleDeleteFolder}
      cancelText="취소"
      confirmText="확인"
    />
  );
};
