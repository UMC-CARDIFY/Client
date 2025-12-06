import { apiGet } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";
import { FetchStudyCardsParams, StudyCardListResponse } from "@typedefs";

export const fetchStudyCards = (params?: FetchStudyCardsParams) => {
  return apiGet<StudyCardListResponse, FetchStudyCardsParams>(END_POINTS.GET_CARDS_SORT_FILTER, params);
};
