import axios, { AxiosError } from 'axios';

const { VITE_URL_API } = import.meta.env

const api = axios.create({ baseURL: VITE_URL_API });

export const postRequest = async <T>(endpoint:string, body: T) => {
  try {
    const { data } = await api.post(endpoint, body);  
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if(axiosError.response) {
        return axiosError.response.data
      }
    }
  }
}

export const getRequest = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
}

export default api;