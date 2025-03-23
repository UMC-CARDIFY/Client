import { Text } from "@components/typography/Text";
import { CommonXIcon } from "@svgs/index";

interface SearchDropdownProps {
  items: string[];
  onRemove: (index: number) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ items, onRemove }) => {
  return (
    <div className="absolute top-full left-1/2 mt-4 -translate-x-1/2 w-[16rem] rounded-lg border border-gray-150 bg-white z-50">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-4 py-2 ${
            index !== items.length - 1 ? "border-b border-gray-150" : ""
          } hover:bg-gray-50`}
        >
          <Text variant="body3">{item}</Text>
          <button onClick={() => onRemove(index)}>
            <CommonXIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
