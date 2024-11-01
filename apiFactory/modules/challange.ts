import { axiosInstance } from "../axios.config";

export const challengeApiFactory = {
  $_get_challenges() {
    let endpoint = `/admin/teams`;
    return axiosInstance.get(endpoint);
  },
  $_get_challenge_tasks(id: string | number) {
    let endpoint = `/api/v2/challenges/${id}/tasks`;
    return axiosInstance.get(endpoint);
  }
}

