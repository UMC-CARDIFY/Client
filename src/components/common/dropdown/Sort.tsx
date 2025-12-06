import { Text } from "@components/typography/Text";
import { SortIcon } from "@svgs/index";
import { useEffect, useState } from "react";
import DropdownButton from "./DropdownContainer";

export type SortOrder = "asc" | "desc" | "edit-newest" | "edit-oldest";
interface SortProps {
  onSelect: (value: SortOrder) => void;
  selected: string;
}

const sortOptions: { label: string; value: SortOrder }[] = [
  { label: "가나다 순", value: "asc" },
  { label: "가나다 역순", value: "desc" },
  { label: "최근 수정일 순", value: "edit-newest" },
  { label: "최근 생성일 순", value: "edit-oldest" },
];

const Sort: React.FC<SortProps> = ({ onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("최근 수정일 순");

  useEffect(() => {
    const matched = sortOptions.find((option) => option.value === selected);
    if (matched) setSelectedLabel(matched.label);
  }, [selected]);

  const handleSelect = (value: SortOrder, label: string) => {
    onSelect(value);
    setSelectedLabel(label);
    setIsOpen(false);
  };

  return (
    <DropdownButton
      label={selectedLabel}
      icon={<SortIcon width={20} height={20} />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {sortOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => handleSelect(option.value, option.label)}
          className="w-full text-left px-5 py-4 text-base-black hover:bg-gray-50 cursor-pointer border-b border-gray-150 whitespace-nowrap appearance-none bg-transparent"
        >
          <Text variant="sub_heading4" className="block w-full">
            {option.label}
          </Text>
        </button>
      ))}
    </DropdownButton>
  );
};

export default Sort;
