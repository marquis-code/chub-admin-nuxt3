import { axiosInstance } from "../axios.config";

export const authApiFactory = {
  $_login(data: any) {
    return axiosInstance.post("admin/auth/login", data);
  },
  $_signup(data: any, config: any = {}) {
    return axiosInstance.post("admin/auth/onboard-admin", data, config);
  },
  $_verify_signup_link(data: any) {
    return axiosInstance.post("admin/auth/verify-registration-link", data);
  },
  $_request_signup_link(data: any) {
    return axiosInstance.post("admin/auth/request-registration-link", data);
  },
  $_verify_login_session(data: any) {
    return axiosInstance.post("admin/auth/verify-login-session", data);
  }
};
