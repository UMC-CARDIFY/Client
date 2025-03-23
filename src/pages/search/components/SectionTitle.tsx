import { Text } from "@components/typography/Text";

interface SectionTitleProps {
  title: string;
  count: number;
}

const SectionTitle = ({ title, count }: SectionTitleProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Text variant="sub_heading2">
        {title} ({count})
      </Text>
    </div>
  );
};

export default SectionTitle;
