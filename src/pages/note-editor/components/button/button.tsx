import { Text } from "@components/typography/Text";
import { cn } from "@utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("border flex border-gray-150 py-2 rounded-[4px] hover:", className)} {...props}>
      <Text variant="sub_heading4" className="text-gray-700 flex gap-[0.625rem]">
        {children}
      </Text>
    </button>
  );
}
