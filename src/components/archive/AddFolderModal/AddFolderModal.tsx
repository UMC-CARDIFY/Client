import { Text } from "@components/typography/Text";
import { ArchiveFolderIcon, ColorCircleCheckIcon, ColorCircleIcon } from "@svgs/index";
import React, { useState, useRef } from "react";

interface AddFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (folderName: string, folderColor: string) => void;
}

const colorKeys = ["blue", "ocean", "lavender", "mint", "sage", "gray", "orange", "coral", "rose", "plum"] as const;

export const AddFolderModal: React.FC<AddFolderModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [folderName, setFolderName] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedColor, setSelectedColor] = useState("blue"); // 기본 색상

  const handleSubmit = () => {
    if (folderName.trim()) {
      onSubmit(folderName, selectedColor);
      setFolderName("");
      setSelectedColor("blue");
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
      <div className="w-[27.75rem] h-auto bg-white rounded-lg border border-gray-150 shadow-md p-10 pb-6">
        <div className="mb-[1.9rem]">
          <Text variant="sub_heading1">폴더 추가</Text>
        </div>

        {/* Folder Name Input */}
        <label htmlFor="folder-name" className="block mb-4">
          <Text variant="sub_heading3" className="text-gray-700">
            이름
          </Text>
        </label>
        <textarea
          id="folder-name"
          placeholder="추가할 폴더의 이름을 입력해주세요."
          value={folderName}
          onChange={handleInput}
          maxLength={100}
          ref={textareaRef}
          className="flex items-center p-4 rounded-md border border-gray-300 bg-white text-gray-700 text-[0.875rem] w-full focus:outline-none focus:border-brand-500 resize-none overflow-hidden"
          rows={1}
        />
        <div className="text-right mb-8">
          <Text variant="caption" className="text-gray-400">
            {folderName.length}/100
          </Text>
        </div>

        {/* Color Picker + Icon */}
        <label className="block mb-[1.06rem]">
          <Text variant="sub_heading3" className="text-gray-700">
            색상
          </Text>
        </label>
        <div className="flex items-center mb-12 w-[21rem] h-[3.25rem]">
          <div className="flex flex-wrap gap-x-5 gap-y-3 w-[11.25rem]">
            {colorKeys.map((color) => (
              <div
                key={color}
                onClick={() => {
                  setSelectedColor(`${color}`);
                }}
                className="cursor-pointer flex justify-center items-center"
              >
                {selectedColor === `${color}` ? (
                  <ColorCircleCheckIcon className={`fill-icon-${color} w-5 h-5`} />
                ) : (
                  <ColorCircleIcon className={`fill-icon-${color} w-5 h-5`} />
                )}
              </div>
            ))}
          </div>

          <div className="w-[0.0625rem] h-full bg-gray-300 ml-[3.75rem] mr-12"></div>
          <div className="w-[2.5rem] h-[2.5rem]">
            {/* SVG 아이콘의 두 색상을 상태로 동적으로 설정 */}
            <ArchiveFolderIcon
              fillColor={`var(--icon-${selectedColor})`} // 동적으로 선택된 색상
              backgroundColor={`var(--icon-${selectedColor}20)`} // 투명도 20% 배경
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
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
