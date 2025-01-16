import { Text } from "@components/typography/Text";
import { InnerFolderIcon, KebabIcon } from "@svgs/index";
import React, { useState } from "react";

interface InsideFolderProps {
  folderName: string;
  color: string;
}

const InsideFolder: React.FC<InsideFolderProps> = ({ folderName, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="w-[11.75rem] h-[3rem] py-3 pl-4 pr-2 gap-2 rounded-lg border border-solid border-gray-150 flex flex-row justify-center items-center hover:bg-gray-50 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InnerFolderIcon className={`fill-icon-${color}`} />
        <Text variant={isHovered ? "sub_heading2" : "sub_heading3"}>{folderName}</Text>
        <KebabIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default InsideFolder;
