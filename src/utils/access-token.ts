import { fetchAccessToken } from "@apis/auth/auth";

let hasFetchedAccessToken = false;

export const requestAccessTokenOnce = async () => {
  if (hasFetchedAccessToken || localStorage.getItem("accessToken")) return;

  hasFetchedAccessToken = true;

  try {
    const token = await fetchAccessToken();
    localStorage.setItem("accessToken", token);
  } catch (error) {
    console.error("accessToken 요청 실패:", error);
  }
};
