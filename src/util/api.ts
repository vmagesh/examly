// api.ts

import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_BASE_URL = "http://127.0.0.1:5001/"; // Replace with your API base URL

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Utility function to handle errors
const handleResponseError = (error: any) => {
  // Customize error handling based on your requirements
  console.error("API request error:", error);
  throw error;
};

// Utility function to make GET requests
export const get = async <T>(url: string, params: any = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleResponseError(error);
    throw error;
  }
};

// Utility function to make POST requests
export const post = async <T>(url: string, data: any = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    handleResponseError(error);
    throw error;
  }
};

// Utility function to make PUT requests
export const put = async <T>(url: string, data: any = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    handleResponseError(error);
    throw error;
  }
};

// Utility function to make DELETE requests
export const remove = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    handleResponseError(error);
    throw error;
  }
};
