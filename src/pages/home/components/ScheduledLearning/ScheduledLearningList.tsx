import { ScheduledLearningItemProps } from "@typedefs/home/scheduled-learning";
import EmptyState from "../EmptyState/EmptyState";
import ScheduledLearningItem from "./ScheduledLearningItem";

interface ScheduledLearningListProps {
  items?: ScheduledLearningItemProps[];
}

const ScheduledLearningList: React.FC<ScheduledLearningListProps> = ({ items = [] }) => {
  if (!items.length) {
    return <EmptyState type="scheduledLearning" />;
  }

  return (
    <div className="w-full flex flex-row gap-4">
      {items.map((item) => (
        <ScheduledLearningItem key={item.noteid} {...item} />
      ))}
    </div>
  );
};

export default ScheduledLearningList;
