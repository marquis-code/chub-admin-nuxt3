import axios, { AxiosResponse } from 'axios'
import { useUser } from '@/composables/auth/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const { logOut } = useUser()

const $_BASE_ENDPOINT = 'https://staging.thechub.app/';
export const axiosInstance = axios.create({
  baseURL: $_BASE_ENDPOINT
});

export interface CustomAxiosResponse extends AxiosResponse {
  value?: any;
  type?: string;
}

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  console.log(config, 'config here');
  console.log(token, 'token from store');
  
  const x_registration_token = localStorage.getItem('x-registration-token');
  const x_auth_token = localStorage.getItem('x-auth-token');
  
  // Set headers correctly
  if (x_registration_token) {
    config.headers['x-registration-token'] = x_registration_token; // Use the value from localStorage
  }

  if (token) {
    config.headers['x-auth-token'] = token; // Use the value from localStorage
  }
  
  return config;
});

axiosInstance.interceptors.response.use(
  (response: CustomAxiosResponse) => {
    return response;
  },
  (err: any) => {
    if (typeof err.response === 'undefined') {
      showToast({
        title: "Error",
        message: "kindly check your network connection",
        toastType: "error",
        duration: 3000
      });
      logOut();
      return {
        type: 'ERROR',
        ...err.response
      };
    }
    if (err.response.status === 401 || err.response.status === 419) {
      logOut();
      showToast({
        title: "Error",
        message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
        toastType: "error",
        duration: 3000
      });
      return {
        type: 'ERROR',
        ...err.response
      };
    } else if (statusCodeStartsWith(err.response.status, 4)) {
      if (err.response.data.message) {
        showToast({
          title: "Error",
          message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
          toastType: "error",
          duration: 3000
        });
      }
      return {
        type: 'ERROR',
        ...err.response
      };
    } else if (err.response.status === 500) {
      showToast({
        title: "Error",
        message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
        toastType: "error",
        duration: 3000
      });
      return {
        type: 'ERROR',
        ...err.response
      };
    } else if (err.response.status === 409) {
      showToast({
        title: "Error",
        message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
        toastType: "error",
        duration: 3000
      });
    }
  }
);

const statusCodeStartsWith = (statusCode: number, startNumber: number): boolean => {
  const statusCodeString = statusCode.toString();
  const startNumberString = startNumber.toString();

  return statusCodeString.startsWith(startNumberString);
};
