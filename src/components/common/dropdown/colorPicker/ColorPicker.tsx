import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { ColorCircleCheckIcon, ColorCircleIcon } from "@svgs/index";
import { useState } from "react";

interface ColorPickerProps {
  onSelect: (selectedColors: string[]) => void;
  onClose?: () => void;
  selectedColors: string[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelect, onClose, selectedColors }) => {
  const [tempSelectedColors, setTempSelectedColors] = useState<string[]>(selectedColors);

  const toggleColorSelection = (color: string) => {
    setTempSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const handleApply = () => {
    onSelect(tempSelectedColors);
    onClose?.();
  };

  return (
    <div className="flex flex-col">
      <Text variant="sub_heading2" className="mt-6 ml-6 mb-5 text-base-black">
        폴더 색상
      </Text>

      <div
        className="ml-6 mr-6 grid"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.75rem",
        }}
      >
        {Object.keys(colorMap).map((color) => (
          <button
            key={color}
            tabIndex={0}
            className="cursor-pointer flex justify-center items-center w-5 h-5 rounded-full"
            onClick={() => toggleColorSelection(color)}
          >
            {tempSelectedColors.includes(color) ? (
              <ColorCircleCheckIcon className="w-5 h-5" style={{ fill: colorMap[color as keyof typeof colorMap] }} />
            ) : (
              <ColorCircleIcon className="w-5 h-5" style={{ fill: colorMap[color as keyof typeof colorMap] }} />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 mb-3 mr-3 flex justify-end">
        <button
          onClick={handleApply}
          className="inline-flex px-[1.25rem] py-[0.375rem] justify-center items-center hover:bg-brand-50 transition rounded-md"
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
