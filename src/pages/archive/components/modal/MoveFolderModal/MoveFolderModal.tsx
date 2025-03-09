import { Text } from "@components/typography/Text";
import { useColorUtils } from "@pages/archive/hooks/useColorUtils";
import { CommonXIcon, SearchThinIcon, StarIcon } from "@svgs/index";
import React, { useState } from "react";
import { ArchiveFolderIcon } from "../../ArchiveFolderIcon";

export interface Folder {
  id: number;
  folderName: string;
  noteCount: number;
  folderColor: string;
  markState?: boolean;
}

interface MoveFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (folderId: string) => void;
  currentFolderName: string;
  folders?: Folder[];
}

export const MoveFolderModal: React.FC<MoveFolderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentFolderName,
  folders = [],
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFolders = folders.filter((folder) =>
    folder.folderName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!isOpen) return null;

  const { darkenColor } = useColorUtils();

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

        <div className="flex flex-col pl-2 overflow-auto w-[45rem] h-[23.4375rem]">
          {filteredFolders.map((folder) => (
            <div
              key={folder.id}
              className="flex items-center h-12 cursor-pointer hover:bg-gray-100"
              onClick={() => onSubmit(folder.id.toString())}
            >
              <div className="w-8 h-8 flex-shrink-0 flex justify-center items-center">
                {folder.markState && <StarIcon />}
              </div>
              <div className="ml-1 mr-4">
                <ArchiveFolderIcon
                  width={28}
                  height={28}
                  fillColor={folder.folderColor}
                  backgroundColor={darkenColor(folder.folderColor, 0.2)}
                />
              </div>
              <div className="flex gap-1">
                <Text variant="sub_heading2" className="text-black">
                  {folder.folderName}
                </Text>
                <Text variant="sub_heading2" className="text-gray-400">
                  ({folder.noteCount})
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
