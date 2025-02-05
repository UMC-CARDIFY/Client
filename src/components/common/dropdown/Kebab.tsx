import { Text } from "@components/typography/Text";
import { KebabIcon } from "@svgs/index";
import { useState } from "react";
import DropdownButton from "./DropdownContainer";

interface KebabProps {
  onSelect: (value: string) => void;
  withFolderMove?: boolean;
}

const Kebab: React.FC<KebabProps> = ({ onSelect, withFolderMove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "폴더 수정", value: "edit" },
    ...(withFolderMove ? [{ label: "폴더 이동", value: "move" }] : []),
    { label: "폴더 삭제", value: "delete", danger: true },
  ];

  return (
    <DropdownButton
      label=""
      icon={<KebabIcon width={withFolderMove ? 24 : 32} height={withFolderMove ? 24 : 32} />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isKebab={true}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          className={`px-5 py-4 text-center whitespace-nowrap hover:bg-gray-50 border-b border-gray-150 last:border-b-0 ${
            item.danger ? "text-red-500" : "text-black"
          }`}
          onClick={() => {
            onSelect(item.value);
            setIsOpen(false);
          }}
        >
          <Text variant="sub_heading3">{item.label}</Text>
        </div>
      ))}
    </DropdownButton>
  );
};

export default Kebab;
