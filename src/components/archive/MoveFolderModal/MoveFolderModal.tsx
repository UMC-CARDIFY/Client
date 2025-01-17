import { Text } from "@components/typography/Text";
import { ArchiveFilledStarIcon, CommonXIcon, SearchThinIcon } from "@svgs/index";
import React, { useState } from "react";
import { ArchiveFolderIcon } from "../ArchiveFolderIcon";

interface Folder {
  id: string;
  name: string;
  color: string;
  isStarred: boolean;
  itemCount: number;
}

interface MoveFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (folderId: string) => void;
  currentFolderName?: string;
  folders: Folder[];
}

// color 값을 어둡게 만드는 함수
const darkenColor = (hex: string, percent: number): string => {
  const num = Number.parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, ((num >> 16) - 255 * percent) | 0));
  const g = Math.max(0, Math.min(255, (((num >> 8) & 0x00ff) - 255 * percent) | 0));
  const b = Math.max(0, Math.min(255, ((num & 0x0000ff) - 255 * percent) | 0));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

export const MoveFolderModal: React.FC<MoveFolderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentFolderName,
  folders,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어에 따라 폴더 목록 필터링
  const filteredFolders = folders.filter((folder) => folder.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="w-[50rem] h-[32.5rem] bg-white rounded-lg shadow-md px-10 py-8 relative">
        <CommonXIcon className="absolute top-6 right-6 w-[2.25rem] h-[2.25rem] cursor-pointer" onClick={onClose} />

        <div className="mb-4 flex gap-1">
          <Text variant="heading4" className="text-blue-500">
            {currentFolderName}
          </Text>
          <Text variant="sub_heading2" className="text-black">
            폴더를 이동시킬 위치를 선택해 주세요.
          </Text>
        </div>

        {/* Search Bar */}
        <div className="relative mb-2 w-[45rem] py-1">
          <SearchThinIcon className="absolute bottom-2 left-2 w-8 h-8" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="폴더명을 검색하세요."
            className="w-full pl-12 pb-2 text-[0.875rem] text-gray-700 placeholder-gray-400 focus:outline-none border-b border-gray-200 focus:border-brand-500"
          />
        </div>

        {/* Folder List */}
        <div className="flex flex-col pl-2 overflow-auto w-[45rem] h-[23.4375rem]">
          {filteredFolders.map((folder) => (
            <div
              key={folder.id}
              className="flex items-center h-12 cursor-pointer hover:bg-gray-100"
              onClick={() => onSubmit(folder.id)}
            >
              <div className="w-8 h-8 flex-shrink-0 flex justify-center items-center">
                {folder.isStarred && <ArchiveFilledStarIcon />}
              </div>
              <div className="ml-1 mr-4">
                <ArchiveFolderIcon
                  width={24}
                  height={24}
                  fillColor={folder.color}
                  backgroundColor={darkenColor(folder.color, 0.2)}
                />
              </div>
              <div className="flex gap-1">
                <Text variant="sub_heading2" className="text-black">
                  {folder.name}
                </Text>
                <Text variant="sub_heading2" className="text-gray-400">
                  ({folder.itemCount})
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
