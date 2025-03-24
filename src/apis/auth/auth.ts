import axiosInstance from "@apis/config/instance";
import { END_POINTS } from "@constants/api";

export const fetchAccessToken = async (): Promise<string> => {
  const response = await axiosInstance.get(END_POINTS.GET_ACCESS_TOKEN);
  return response.data.accessToken;
};
