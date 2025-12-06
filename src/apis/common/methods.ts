import axiosInstance from "@apis/config/instance";
import axios from "axios";

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

export const apiPut = async <T, B = undefined>(url: string, body?: B): Promise<T> => {
  const response = await axiosInstance.put<T>(url, body);
  return response.data;
};

export const apiDelete = async <T, P = undefined>(url: string, params?: P): Promise<T> => {
  const response = await axiosInstance.delete<T>(url, { params });
  return response.data;
};

export const apiPostMultipart = async <T>(url: string, formData: FormData): Promise<T> => {
  const baseURL = `${import.meta.env.VITE_SERVER_URL}${import.meta.env.VITE_API_VERSION}`;
  const token = localStorage.getItem("accessToken");

  const response = await axios.post<T>(`${baseURL}${url}`, formData, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    withCredentials: true,
  });
  return response.data;
};
