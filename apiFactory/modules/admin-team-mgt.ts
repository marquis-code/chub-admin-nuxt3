import { axiosInstance } from "../axios.config";

export const adminTeamMgtApiFactory = {
  $_get_admin_team() {
    let endpoint = `/admin/teams`;
    return axiosInstance.get(endpoint);
  },
  $_get_admin_user_distribution() {
    const url = '/admin/teams/stats';
    return axiosInstance.get(url);
},
  $_get_audit_logs() {
    const url = '/admin/teams/audit-logs';
    return axiosInstance.get(url);
  },
  $_get_super_admin_activity_logs(adminId: string | number) {
    const url = `/admin/teams/admin-activity/${adminId}`;
    return axiosInstance.get(url);
  },
  $_assign_roles(adminId: string | number, payload: any){
    const url = `/admin/teams/admin-activity/${adminId}`;
    return axiosInstance.put(url);
  },
  $_suspend_admin(adminId: string | number){
    const url = `/admin/teams/suspend-admin/${adminId}`;
    return axiosInstance.put(url);
  },
  $_update_admin_profile(adminId: string | number, payload: any){
    const url = `/admin/teams/update-profile/${adminId}`;
    return axiosInstance.patch(url, payload);
  },
  // $_get_admin_challenges(){
  //   const url  = '/admin/challenges
  //   return axiosInstance.get(url);
  // },
  $_get_admin_challenges(queryParams = {}) {
    const url = '/admin/challenges';
    return axiosInstance.get(url, { params: queryParams });
  },
  $_create_admin_challenges(payload: any){
    const url  = '/admin/challenges';
    return axiosInstance.post(url, payload);
  },
  $_update_admin_challenges(id: any, payload: any){
    const url  = `/admin/challenges/${id}`;
    return axiosInstance.patch(url, payload);
  },
  $_assign_role_admin(payload: Record<string, any>, adminId: string | number){
    const url  = `/admin/teams/assign-role/${adminId}`;
    return axiosInstance.put(url, payload);
  },
  $_create_admin(payload: any){
    const url  = '/admin/teams/add-new-admin';
    return axiosInstance.post(url, payload);
  },
  //Not yet on postman
  $_create_admin_role(payload: any){
    const url  = '/admin/create-role';
    return axiosInstance.post(url, payload);
  }
}