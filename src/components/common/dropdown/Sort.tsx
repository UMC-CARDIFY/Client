import { Text } from "@components/typography/Text";
import { SortIcon } from "@svgs/index";
import { handleSelect } from "@utils/dropdownHandlers";
import { useState } from "react";
import DropdownButton from "./DropdownContainer";

interface SortProps {
  onSelect: (value: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("최근 수정일 순");

  const sortOptions = [
    { label: "가나다 순", value: "asc" },
    { label: "가나다 역순", value: "desc" },
    { label: "최근 수정일 순", value: "recentEdit" },
    { label: "최근 생성일 순", value: "recentCreate" },
  ];

  return (
    <DropdownButton
      label={selectedSort}
      icon={<SortIcon width={20} height={20} />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {sortOptions.map((option) => (
        <div
          key={option.value}
          role="button"
          tabIndex={0}
          className="px-5 py-4 text-base-black hover:bg-gray-50 cursor-pointer border-b border-gray-150 whitespace-nowrap"
          onClick={
            () => handleSelect(option.value, option.label, setSelectedSort, onSelect, setIsOpen) // ✅ handleSelect 호출
          }
        >
          <Text variant="sub_heading3">{option.label}</Text>
        </div>
      ))}
    </DropdownButton>
  );
};

export default Sort;
