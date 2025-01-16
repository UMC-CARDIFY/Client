import { Text } from "@components/typography/Text";
import React, { useState, useRef } from "react";

interface AddSubFolderProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (folderName: string) => void;
}

export const AddSubFolder: React.FC<AddSubFolderProps> = ({ isOpen, onClose, onSubmit }) => {
  const [folderName, setFolderName] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (folderName.trim()) {
      onSubmit(folderName);
      setFolderName("");
      onClose();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setFolderName(value);
    }
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="w-[27.75rem] h-auto bg-white rounded-lg border border-gray-150 shadow-md pt-10 px-4 pb-6">
        <div className="px-6">
          <div className="mb-[1.19rem]">
            <Text variant="sub_heading1" className="text-black mb-6">
              폴더 추가
            </Text>
          </div>
          <textarea
            id="folder-name"
            placeholder="추가할 폴더의 이름을 입력해주세요."
            value={folderName}
            onChange={handleInput}
            maxLength={100}
            ref={textareaRef}
            className="w-full p-4 rounded-md border border-gray-300 bg-white text-gray-700 text-[0.875rem] focus:outline-none focus:border-brand-500 resize-none overflow-hidden"
            rows={1}
          />
          <div className="text-right mb-8 m-0">
            <Text variant="caption" className="text-gray-400">
              {folderName.length}/100
            </Text>
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className="h-8 px-5 py-1 rounded-md bg-gray-50 hover:bg-gray-200">
            <Text variant="sub_heading2" className="text-gray-700">
              취소
            </Text>
          </button>
          <button onClick={handleSubmit} className="h-8 px-5 py-1 rounded-md bg-brand-50 hover:bg-brand-light">
            <Text variant="sub_heading2" className="text-brand-700">
              확인
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
};
