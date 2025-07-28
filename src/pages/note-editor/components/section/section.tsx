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
      <div className="flex flex-col ml-4">
        <Text variant="caption" className="text-gray-700 mb-4">
          {title}
        </Text>
        {children}
      </div>
    </>
  );
}
