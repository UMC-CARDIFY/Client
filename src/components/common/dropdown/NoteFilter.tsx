import { Text } from "@components/typography/Text";
import { CommonXIcon20, FilteringIcon } from "@svgs/index";
import { handleClearFilter, handleSelect } from "@utils/dropdownHandlers";
import { useState } from "react";
import DropdownButton from "./DropdownContainer";

interface NoteFilterProps {
  onSelect: (value: string | null) => void;
}

const NoteFilter: React.FC<NoteFilterProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions = [
    { label: "플래시 카드 있음", value: "withCard" },
    { label: "플래시 카드 없음", value: "withoutCard" },
  ];

  return (
    <DropdownButton
      label={selectedFilter || "필터링"}
      icon={
        selectedFilter ? (
          <CommonXIcon20
            className="cursor-pointer hover:bg-brand-200 rounded transition"
            onClick={(e) => handleClearFilter(e, setSelectedFilter, onSelect, setIsOpen, null)}
          />
        ) : (
          <FilteringIcon width={20} height={20} />
        )
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isNoteFilterActive={!!selectedFilter}
    >
      {filterOptions.map((option) => (
        <button
          key={option.value}
          tabIndex={0}
          className="px-6 py-4 text-base-black text-center whitespace-nowrap cursor-pointer hover:bg-gray-50 border-b border-gray-150 last:border-b-0"
          onClick={() => handleSelect(option.value, option.label, setSelectedFilter, onSelect, setIsOpen)}
        >
          <Text variant="sub_heading3">{option.label}</Text>
        </button>
      ))}
    </DropdownButton>
  );
};

export default NoteFilter;
