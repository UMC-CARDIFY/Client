import { Text } from "@components/typography/Text";
import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <>
      <div className="w-full h-[1px] bg-gray-150 my-4" />
      <div className="flex flex-col">
        <Text variant="caption1" className="text-gray-700 mb-4">
          {title}
        </Text>
        <div className="flex flex-col gap-1">{children}</div>
      </div>
    </>
  );
}
