import { Text } from "@components/typography/Text";
import { useColorUtils } from "@pages/archive/hooks/useColorUtils";
import { colorMap } from "@styles/colorMap";
import { StarIcon } from "@svgs/index";
import React from "react";
import { ArchiveFolderIcon } from "../ArchiveFolderIcon";

interface FolderNameHeaderProps {
  folderName: string;
  color: string;
}

const FolderNameHeader: React.FC<FolderNameHeaderProps> = ({ folderName, color }) => {
  const colorHexCode = colorMap[color as keyof typeof colorMap];
  const { darkenColor } = useColorUtils();
  const darkenedColor = darkenColor(colorHexCode, 0.2);

  return (
    <div className="flex flex-row items-center h-[4rem]">
      <StarIcon className="mr-2" />
      <ArchiveFolderIcon fillColor={colorHexCode} backgroundColor={darkenedColor} />
      <Text variant="heading2" className="text-base-black ml-4">
        {folderName}
      </Text>
    </div>
  );
};

export default FolderNameHeader;
