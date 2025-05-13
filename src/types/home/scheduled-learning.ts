export interface ScheduledLearningItemProps {
  noteid: number;
  name: string;
  folderId: number;
  folderName: string;
  folderColor: string;
  completedCards: number; // 학습 완료한 카드 수
  timeReachedCards: number; // 학습 시간에 도달한 카드 수
}
