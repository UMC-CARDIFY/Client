import { Text } from "@components/typography/Text";
import { useState } from "react";

interface DropdownButtonProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  isNoteFilterActive?: boolean;
  isKebab?: boolean;
}

const DropdownContainer: React.FC<DropdownButtonProps> = ({
  label,
  icon,
  children,
  isOpen,
  setIsOpen,
  isNoteFilterActive,
  isKebab,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const openState = isOpen ?? internalOpen;
  const setOpenState = setIsOpen ?? setInternalOpen;

  return (
    <div className="inline-block text-left">
      <div className="relative">
        <button
          className={`flex justify-center items-center gap-2 rounded-lg transition ${
            isKebab
              ? "p-0 hover:bg-gray-100 rounded-md"
              : isNoteFilterActive
                ? "bg-brand-100 hover:bg-brand-150 px-3 py-2 text-brand-700"
                : "bg-gray-100 hover:bg-gray-200 px-3 py-2 text-gray-700"
          }`}
          onClick={() => setOpenState(!openState)}
        >
          {icon}
          {label && !isKebab && (
            <Text variant="sub_heading4" className={isNoteFilterActive ? "text-brand-700" : "text-gray-700"}>
              {label}
            </Text>
          )}
        </button>

        {openState && (
          <div
            className="absolute z-10 left-0 mt-2 bg-white border border-gray-150 rounded-lg"
            style={{
              boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.04)",
              width: "auto",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownContainer;
