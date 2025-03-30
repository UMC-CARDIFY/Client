import { Modal } from "@components/common/Modal";
import { useDeleteFolderMutation } from "@hooks/folder/use-delete-folder";
import React from "react";

interface DeleteFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  folderName: string;
  folderId: number;
}

export const DeleteFolderModal: React.FC<DeleteFolderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  folderName,
  folderId,
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
      onSubmit={handleDeleteFolder}
      cancelText="취소"
      confirmText="확인"
    />
  );
};
