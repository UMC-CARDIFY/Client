import { apiGet } from "@apis/common/methods";
import { END_POINTS } from "@constants/api";

interface FetchAccessTokenResponse {
  accessToken: string;
}

export const fetchAccessToken = async (): Promise<string> => {
  const { accessToken } = await apiGet<FetchAccessTokenResponse>(END_POINTS.GET_ACCESS_TOKEN);
  return accessToken;
};
