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
            ? "bg-brand-100 hover:bg-brand-150 active:bg-brand-200 text-brand-700"
            : "hover:bg-gray-50 active:bg-gray-100"
        }`}
      onClick={onClick}
    >
      <Text variant="sub_heading4">{children}</Text>
    </button>
  );
}
