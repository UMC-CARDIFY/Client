import { Text } from "@components/typography/Text";

interface ChipProps {
  text: string;
  className?: string;
}

export const Chip = ({ text, className = "" }: ChipProps) => {
  return (
    <div className={`px-2 py-1 bg-brand-100 rounded inline-flex justify-center items-center gap-2 ${className}`}>
      <Text variant="caption1" className="justify-start text-brand-700 leading-[14px]">
        {text}
      </Text>
    </div>
  );
};
