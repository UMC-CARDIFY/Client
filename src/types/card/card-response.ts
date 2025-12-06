export interface StudyCard {
  studyStatus: number;
  noteName: string;
  color: string;
  folderName: string;
  recentStudyDate: string | null;
  nextStudyDate: string | null;
  studyCardSetId: number;
  markStatus: "ACTIVE" | "INACTIVE";
}

export type StudyCardListResponse = StudyCard[];
