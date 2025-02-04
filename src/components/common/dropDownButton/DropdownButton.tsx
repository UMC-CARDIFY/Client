import { Text } from "@components/typography/Text";
import { colorMap } from "@styles/colorMap";
import { ColorCircleIcon, CommonXIcon20, FilteringIcon, KebabIcon, SortIcon } from "@svgs/index";
import React, { useState } from "react";
import ColorPicker from "../colorPicker/ColorPicker";

interface MenuItem {
  label: string;
  value: string;
  danger?: boolean;
}

interface DropdownButtonProps {
  type: "sort" | "noteFilter" | "folderFilter" | "kebab";
  onSelect: (value: any) => void;
  menuOptions?: {
    withFolderMove?: boolean;
  };
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ type, onSelect, menuOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNoteFilter, setSelectedNoteFilter] = useState<string>("필터링");
  const [selectedSort, setSelectedSort] = useState("최근 수정일 순");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleSortSelect = (value: string, label: string) => {
    setSelectedSort(label);
    onSelect(value);
    setIsOpen(false);
  };

  const handleNoteFilterSelect = (value: string, label: string) => {
    setSelectedNoteFilter(label);
    onSelect(value);
    setIsOpen(false);
  };

  const handleColorSelect = (colors: string[]) => {
    setSelectedColors(colors);
    onSelect(colors);
  };

  const handleClearFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === "folderFilter") {
      setSelectedColors([]);
    } else {
      setSelectedNoteFilter("필터링");
    }
    onSelect(null);
  };

  const getKebabMenuItems = () => {
    const baseItems = [
      { label: "폴더 수정", value: "edit" },
      { label: "폴더 삭제", value: "delete", danger: true },
    ];

    if (menuOptions?.withFolderMove) {
      return [{ label: "폴더 이동", value: "move" }, ...baseItems];
    }

    return baseItems;
  };

  const config: {
    [key in DropdownButtonProps["type"]]: {
      label: string;
      icon: React.ReactNode;
      menuItems?: MenuItem[];
    };
  } = {
    sort: {
      label: selectedSort,
      icon: <SortIcon width={20} height={20} className="text-gray-700" />,
      menuItems: [
        { label: "가나다 순", value: "asc" },
        { label: "가나다 역순", value: "desc" },
        { label: "최근 수정일 순", value: "recentEdit" },
        { label: "최근 생성일 순", value: "recentCreate" },
      ],
    },
    noteFilter: {
      label: selectedNoteFilter,
      icon:
        selectedNoteFilter !== "필터링" ? (
          <CommonXIcon20 className="cursor-pointer hover:bg-brand-200 rounded transition" onClick={handleClearFilter} />
        ) : (
          <FilteringIcon width={20} height={20} className="text-gray-700" />
        ),
      menuItems: [
        { label: "플래시 카드 있음", value: "withCard" },
        { label: "플래시 카드 없음", value: "withoutCard" },
      ],
    },
    folderFilter: {
      label: selectedColors.length > 0 ? "" : "필터링",
      icon:
        selectedColors.length > 0 ? (
          <>
            <CommonXIcon20 className="cursor-pointer" onClick={handleClearFilter} />
            <div className="flex gap-2">
              {selectedColors.map((color) => (
                <ColorCircleIcon
                  key={color}
                  className="w-4 h-4"
                  style={{ fill: colorMap[color as keyof typeof colorMap] }}
                />
              ))}
            </div>
          </>
        ) : (
          <FilteringIcon width={20} height={20} />
        ),
    },
    kebab: {
      label: "",
      icon: <KebabIcon width={24} height={24} className="hover:bg-gray-100 rounded-md transition" />,
      menuItems: getKebabMenuItems(),
    },
  };

  const { label, icon, menuItems } = config[type];
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const getButtonClassName = () => {
    const baseClasses = type === "kebab" ? "p-1" : "flex justify-center items-center gap-2 px-3 py-2 rounded-lg";

    if (type === "kebab") {
      return baseClasses;
    }

    if (type === "noteFilter" && selectedNoteFilter !== "필터링") {
      return `${baseClasses} bg-brand-100 hover:bg-brand-150 transition text-brand-700`;
    }

    return `${baseClasses} bg-gray-100 hover:bg-gray-200 transition text-gray-700`;
  };

  const getMenuItemClassName = (item: MenuItem) => {
    if (type === "sort" || type === "kebab") {
      return `
        px-[20px] py-[16px] hover:bg-gray-50 cursor-pointer border-b border-gray-150 whitespace-nowrap
        ${item.danger ? "text-red-500" : ""}
        ${type === "kebab" ? "flex items-center" : ""}
      `;
    }

    if (type === "noteFilter") {
      return `px-6 py-4 text-center whitespace-nowrap cursor-pointer hover:bg-gray-50 border-b border-gray-150 last:border-b-0 ${
        item.danger ? "text-red-500" : ""
      }`;
    }

    return `px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700 border-b border-gray-150 last:border-b-0 ${
      item.danger ? "text-red-500" : ""
    }`;
  };

  return (
    <div className="inline-block text-left">
      <div className="relative">
        <button className={getButtonClassName()} onClick={toggleDropdown}>
          {icon}
          {type !== "kebab" && label && (
            <Text
              variant="sub_heading4"
              className={type === "noteFilter" && selectedNoteFilter !== "필터링" ? "text-brand-700" : "text-gray-700"}
            >
              {label}
            </Text>
          )}
        </button>

        {isOpen && (
          <div
            className="absolute left-0 mt-2 bg-white border border-gray-150 rounded-lg w-auto"
            style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.04)" }}
          >
            {type === "folderFilter" ? (
              <ColorPicker onSelect={handleColorSelect} onClose={() => setIsOpen(false)} />
            ) : (
              menuItems?.map((item: MenuItem, index: number) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  className={getMenuItemClassName(item)}
                  onClick={() =>
                    type === "noteFilter"
                      ? handleNoteFilterSelect(item.value, item.label)
                      : handleSortSelect(item.value, item.label)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      type === "noteFilter"
                        ? handleNoteFilterSelect(item.value, item.label)
                        : handleSortSelect(item.value, item.label);
                    }
                  }}
                >
                  <Text variant="sub_heading3" className={`${type === "kebab" ? "w-24" : ""}`}>
                    {item.label}
                  </Text>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
