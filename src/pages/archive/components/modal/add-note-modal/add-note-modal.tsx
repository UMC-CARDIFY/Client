import { Text } from "@components/typography/Text";
import React, { useState } from "react";

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (noteName: string) => void;
  isLoading?: boolean;
}

const MAX_LENGTH = 100;

export const AddNoteModal: React.FC<AddNoteModalProps> = ({ isOpen, onClose, onSubmit, isLoading = false }) => {
  const [noteName, setNoteName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(noteName);
  };

  const handleClose = () => {
    setNoteName("");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setNoteName(value);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="w-[27.75rem] p-10 rounded-lg border border-gray-150 bg-white">
        <Text variant="sub_heading2" className="text-gray-black">
          노트 추가
        </Text>

        <div className="mt-[2.31rem]">
          <input
            type="text"
            value={noteName}
            onChange={handleChange}
            placeholder="추가할 노트의 이름을 입력해주세요."
            className="w-full px-4 py-4 rounded border border-gray-300 text-sm font-normal placeholder:text-gray-350 focus:outline-none focus:border-brand-500"
            disabled={isLoading}
          />
          <div className="mt-2 text-right">
            <Text variant="caption1" className="text-gray-400">
              {noteName.length}/{MAX_LENGTH}
            </Text>
          </div>
        </div>

        <div className="flex justify-end gap-[0.44rem] mt-4">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="px-5 py-2 rounded bg-gray-50 hover:bg-gray-100 disabled:opacity-50"
          >
            <Text variant="sub_heading3" className="text-gray-700">
              취소
            </Text>
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-5 py-2 rounded bg-brand-50 hover:bg-brand-100 disabled:opacity-50"
          >
            <Text variant="sub_heading3" className="text-brand-700">
              {isLoading ? "생성 중..." : "확인"}
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
};
