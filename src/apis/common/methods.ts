import axiosInstance from "@apis/config/instance";

export const apiGet = async <T, P = undefined>(url: string, params?: P): Promise<T> => {
  const response = await axiosInstance.get<T>(url, { params });
  return response.data;
};

export const apiPost = async <T, B = undefined>(url: string, body?: B): Promise<T> => {
  const response = await axiosInstance.post<T>(url, body);
  return response.data;
};

export const apiPatch = async <T, B = undefined>(url: string, body?: B): Promise<T> => {
  const response = await axiosInstance.patch<T>(url, body);
  return response.data;
};
