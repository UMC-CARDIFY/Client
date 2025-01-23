import { Text } from "@components/typography/Text";
import { NewFolderIcon } from "@svgs/index";

interface EmptyStateProps {
  type: "note" | "folder";
}

const EmptyState: React.FC<EmptyStateProps> = ({ type }) => {
  return (
    <div className="flex flex-col items-center text-gray-500">
      <NewFolderIcon className="w-12 h-12 mb-2" />
      <div className="flex flex-col items-center gap-1">
        <Text variant="sub_heading2">
          {type === "note" ? "아직 작성한 노트가 없습니다." : "아직 생성된 폴더가 없습니다."}
        </Text>
        <Text variant="body3">
          {type === "note" ? "새로운 노트를 추가하고 학습을 시작하세요." : "새로운 폴더를 추가하고 학습을 시작하세요."}
        </Text>
      </div>
      {type === "folder" && (
        <button type="button" className="px-4 py-1 bg-brand-50 rounded mt-4">
          <Text variant="sub_heading2" className="text-brand-original">
            폴더 추가하기
          </Text>
        </button>
      )}
    </div>
  );
};

export default EmptyState;
