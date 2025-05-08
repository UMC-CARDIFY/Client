import { Text } from "@components/typography/Text";
import { cn } from "@utils/cn";

interface ButtonProps {
  children: string;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button className={cn("border border-gray-150 py-2 rounded-[4px]", className)}>
      <Text variant="sub_heading4" className="text-gray-700">
        {children}
      </Text>
    </button>
  );
}
