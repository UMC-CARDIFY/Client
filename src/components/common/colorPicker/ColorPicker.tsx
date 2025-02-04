import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { ColorCircleCheckIcon, ColorCircleIcon } from "@svgs/index";
import React, { useState } from "react";

interface ColorPickerProps {
  onSelect: (selectedColors: string[]) => void;
  onClose?: () => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelect, onClose }) => {
  const [tempSelectedColors, setTempSelectedColors] = useState<string[]>([]);

  const toggleColorSelection = (color: string) => {
    setTempSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const handleApply = () => {
    onSelect(tempSelectedColors);
    onClose?.();
  };

  return (
    <div className="flex flex-col">
      <Text variant="sub_heading2" className="mt-6 ml-6 mb-5">
        폴더 색상
      </Text>

      <div
        className="ml-6 mr-6 grid"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "8px",
        }}
      >
        {Object.keys(colorMap).map((color) => (
          <div
            key={color}
            role="button"
            tabIndex={0}
            className="cursor-pointer flex justify-center items-center w-8 h-8 rounded-full"
            onClick={() => toggleColorSelection(color)}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleColorSelection(color);
            }}
          >
            {tempSelectedColors.includes(color) ? (
              <ColorCircleCheckIcon className="w-6 h-6" style={{ fill: colorMap[color as keyof typeof colorMap] }} />
            ) : (
              <ColorCircleIcon className="w-6 h-6" style={{ fill: colorMap[color as keyof typeof colorMap] }} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 mb-3 mr-3 flex justify-end">
        <button
          onClick={handleApply}
          className="inline-flex h-8 px-[20px] py-[6px] justify-center items-center hover:bg-brand-50 transition rounded-md"
        >
          <Text variant="sub_heading3" className="text-brand-700">
            적용
          </Text>
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
