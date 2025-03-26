import { colorMap } from "@styles/colorMap";
import { CommonXIcon20, FilteringIcon } from "@svgs/index";
import { useEffect, useState } from "react";
import DropdownButton from "./DropdownContainer";
import ColorPicker from "./colorPicker/ColorPicker";

interface FolderFilterProps {
  onSelect: (colors: string[]) => void;
  selected: string[];
}

const FolderFilter: React.FC<FolderFilterProps> = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(() => {
    setSelectedColors(selected);
  }, [selected]);

  const handleColorSelect = (colors: string[]) => {
    setSelectedColors(colors);
    onSelect(colors);
    setIsOpen(false);
  };

  const handleClearFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors([]);
    onSelect([]);
    setIsOpen(false);
  };

  return (
    <DropdownButton
      label={selectedColors.length > 0 ? "" : "필터링"}
      icon={
        selectedColors.length > 0 ? (
          <div className="flex items-center gap-2">
            <CommonXIcon20 className="cursor-pointer" onClick={handleClearFilter} />
            <div className="flex gap-1">
              {selectedColors.map((color) => (
                <div
                  key={color}
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: colorMap[color as keyof typeof colorMap],
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <FilteringIcon width={20} height={20} />
        )
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ColorPicker selectedColors={selectedColors} onSelect={handleColorSelect} onClose={() => setIsOpen(false)} />
    </DropdownButton>
  );
};

export default FolderFilter;
