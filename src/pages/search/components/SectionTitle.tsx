import { Text } from "@components/typography/Text";

interface SectionTitleProps {
  title: string;
  count: number;
  onClick?: () => void;
  showToggle?: boolean;
}

const SectionTitle = ({ title, count, onClick, showToggle = false }: SectionTitleProps) => {
  return (
    <div className="flex justify-between items-center">
      <Text variant="heading3">
        {title} ({count})
      </Text>
      {showToggle && (
        <button onClick={onClick}>
          <Text variant="body3" className="text-gray-400 underline">
            전체보기
          </Text>
        </button>
      )}
    </div>
  );
};

export default SectionTitle;
