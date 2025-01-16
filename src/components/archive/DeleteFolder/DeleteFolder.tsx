import { Text } from "@components/typography/Text";
import { IcCommonAlert } from "@svgs/index";
import React from "react";

interface DeleteFolderProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  folderName: string; // 삭제할 폴더 이름
}

export const DeleteFolder: React.FC<DeleteFolderProps> = ({ isOpen, onClose, onSubmit, folderName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="flex flex-col justify-center items-center w-[25rem] p-6 pt-10 pb-8 rounded-lg border border-gray-150 bg-white">
        <div className="flex justify-center items-center">
          <IcCommonAlert className="w-12 h-12" />
        </div>

        <Text variant="heading3" className="text-alert-500 mt-3 mb-4">
          폴더 삭제
        </Text>

        <div className="text-center mb-6">
          <Text variant="body2" className="text-black">
            '{folderName}'을 삭제하시겠습니까?
          </Text>
          <br />
          <Text variant="body2" className="text-black">
            이 폴더 안의 노트가 함께 삭제됩니다.
          </Text>
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="h-8 px-5 py-1 rounded-md bg-gray-50 hover:bg-gray-200">
            <Text variant="sub_heading2" className="text-gray-700">
              취소
            </Text>
          </button>
          <button onClick={onSubmit} className="h-8 px-5 py-1 rounded-md bg-brand-50 hover:bg-brand-light">
            <Text variant="sub_heading2" className="text-brand-700">
              확인
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
};
