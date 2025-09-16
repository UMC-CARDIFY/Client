import { Text } from "@components/typography/Text";

interface TabProps {
  children: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ children, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-[0.38rem] rounded-[4px] transition-colors duration-200
        ${
          isActive
            ? "bg-gray-100 hover:bg-gray-50 active:bg-gray-100 text-gray-black"
            : "hover:bg-gray-50 active:bg-gray-100 bg-gray-white text-gray-500"
        }`}
      onClick={onClick}
    >
      <Text variant="sub_heading4">{children}</Text>
    </button>
  );
}
