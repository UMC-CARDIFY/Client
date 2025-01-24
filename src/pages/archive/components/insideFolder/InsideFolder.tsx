import { Text } from "@components/typography/Text";
import { InnerFolderIcon, KebabIcon } from "@svgs/index";
import React, { useState } from "react";

interface InsideFolderProps {
  folderName: string;
  color: string;
}

const InsideFolder: React.FC<InsideFolderProps> = ({ folderName, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text: string, maxLength = 10) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div>
      <div
        className={`w-[11.75rem] h-[3rem] py-2 pl-4 pr-2 rounded-lg border border-solid
         border-gray-150 flex flex-row items-center cursor-pointer
         ${isHovered ? "bg-gray-50" : "bg-white"} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InnerFolderIcon className={`fill-icon-${color} mr-2`} />
        <Text variant={isHovered ? "sub_heading2" : "sub_heading3"} className="w-[6rem] text-base-black truncate">
          {truncateText(folderName)}
        </Text>
        <KebabIcon
          className="cursor-pointer ml-2 rounded-lg hover:bg-gray-100"
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        />
      </div>
    </div>
  );
};

export default InsideFolder;
