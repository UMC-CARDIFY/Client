import { Text, TextProps } from "@components/typography/Text";
import { cn } from "@utils/cn";

interface ButtonProps {
  size?: "XS" | "S" | "M" | "L" | "XL" | "UNKNOWN";
  variant: "SIZE" | "NORMAL" | "STROKE" | "FILL" | "SMALL" | "LONG";
  color?: "skyblue" | "blue";
  children: React.ReactNode;
  className?: string;
}

const sizeClassMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  XS: "w-4 h-4 hover:bg-gray-100 active:bg-gray-200",
  S: "w-5 h-5 hover:bg-gray-100 active:bg-gray-150",
  M: "w-6 h-6 hover:bg-gray-100 active:bg-gray-150",
  L: "w-7 h-7 hover:bg-gray-100 active:bg-gray-150",
  XL: "w-8 h-8 hover:bg-gray-50 active:bg-gray-100",
  UNKNOWN: "",
};

const textVariantMap: Record<ButtonProps["variant"], TextProps["variant"]> = {
  SIZE: "sub_heading4",
  NORMAL: "sub_heading3",
  STROKE: "sub_heading4",
  FILL: "sub_heading4",
  SMALL: "sub_heading4",
  LONG: "sub_heading4",
};

const ColorMap: Record<NonNullable<ButtonProps["color"]>, string> = {
  skyblue: "bg-brand-100 hover:bg-brand-200 active:bg-brand-300 text-brand-700",
  blue: "bg-brand-original text-base-white",
};

const Button: React.FC<ButtonProps> = ({ variant, size = "UNKNOWN", color, children, className }) => {
  return (
    <button
      className={cn(
        `rounded flex items-center justify-center ${className}`,
        variant === "SIZE" && sizeClassMap[size],
        variant === "NORMAL" && "px-5 py-2 bg-gray-50 hover:bg-gray-100 active:bg-gray-150",
        variant === "STROKE" &&
          "border border-gray-150 gap-[0.62rem]  px-4 py-2 bg-gray-white hover:bg-gray-50 active:bg-gray-100",
        variant === "FILL" && "gap-2 px-4 py-2  hover:bg-gray-100 active:bg-gray-200",
        variant === "SMALL" && "gap-2 px-2 py-1 bg-gray-white hover:bg-gray-50 active:bg-gray-100",
        variant === "LONG" && `w-full px-2 py-3 ${color ? ColorMap[color] : ""}`,
      )}
    >
      <Text
        variant={textVariantMap[variant]}
        className={cn(
          "flex",
          variant === "NORMAL" && "text-gray-700",
          variant === "STROKE" && "gap-[0.62rem] text-gray-500",
          variant === "FILL" && "gap-2 text-gray-700",
          variant === "SMALL" && "gap-2 text-gray-700",
          variant == "LONG" && "gap-2",
        )}
      >
        {children}
      </Text>
    </button>
  );
};

export default Button;
