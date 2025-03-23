import { Text } from "@components/typography/Text";
import { SearchIcon } from "@svgs/index";
import { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "비정형 데이터",
    "비정형 데이터",
    "비정형 데이터",
    "비정형 데이터",
    "비정형 데이터",
  ]);

  const handleRemove = (index: number) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative">
      <div className="flex flex-row gap-3 w-60 py-1.5 px-6 bg-gray-100 items-center rounded-2xl">
        <SearchIcon />
        <Text variant="body3" className="text-gray-700 w-full">
          <input
            type="text"
            placeholder="통합 검색"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-transparent text-gray-700 focus:outline-none"
          />
        </Text>
      </div>

      {inputValue && recentSearches.length > 0 && <SearchDropdown items={recentSearches} onRemove={handleRemove} />}
    </div>
  );
};

export default SearchInput;
