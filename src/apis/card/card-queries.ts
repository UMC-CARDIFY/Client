import { queryOptions } from "@tanstack/react-query";
import { FetchStudyCardsParams } from "@typedefs";
import { fetchStudyCards } from "./card";

export const CARD_QUERY_KEY = {
  ALL: () => ["cards"] as const,
  LIST: (params?: FetchStudyCardsParams) => ["cards", "list", params] as const,
} as const;

export const CARD_QUERY_OPTION = {
  LIST: (params?: FetchStudyCardsParams) =>
    queryOptions({
      queryKey: CARD_QUERY_KEY.LIST(params),
      queryFn: () => fetchStudyCards(params),
    }),
};
