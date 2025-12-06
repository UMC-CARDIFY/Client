import type { SortOrder } from "../common";

export interface FetchStudyCardsParams {
  order?: SortOrder;
  color?: string;
  studyStatus?: number;
}
