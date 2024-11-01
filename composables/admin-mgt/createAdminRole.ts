import { adminTeamMgtApiFactory } from "@/apiFactory/modules/admin-team-mgt";

const roleObj = ref({
  name: '',
  role: '',
  roleOptions: {},
});

export const useCreateAdminRole = () => {
  const loading = ref(false);
  const createAdminRole = async () => {
    loading.value = true;

    const res = await adminTeamMgtApiFactory.$_create_admin_role(roleObj.value);
    if (res.type !== "ERROR") {
      console.log(res);
    }
    loading.value = false;
  };  

  const setRoleObj = (data: any) => {
    roleObj.value.name = data.name
    roleObj.value.role = data.role
    roleObj.value.roleOptions = data.roleOptions
  }


  return { createAdminRole, loading, roleObj, setRoleObj };
};
