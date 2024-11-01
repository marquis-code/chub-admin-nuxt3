import { adminTeamMgtApiFactory } from "@/apiFactory/modules/admin-team-mgt";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const adminObj = ref({
  name: "",
  email: "",
  photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
  role: "USER_ADMIN",
  phone: "",
});

export const useCreateAdmin = () => {
  const loading = ref(false);
  const createAdmin = async () => {
    loading.value = true;

    const res = await adminTeamMgtApiFactory.$_create_admin(adminObj.value) as any
    if (res.type !== "ERROR") {
        showToast({
            title: "Success",
            message: "Admin was created successfully!",
            toastType: "success",
            duration: 3000
          });
      console.log(res);
    } else {
        showToast({
            title: "Error",
            message: "Something went wrong",
            toastType: "error",
            duration: 3000
          });
    }
    loading.value = false;
  };

  const setObj = (data: any) => {
    adminObj.value.name = data.name;
    adminObj.value.email = data.email;
    adminObj.value.photo = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg";
    adminObj.value.role = data.role;
    adminObj.value.phone = data.phone;
  };

    // Computed property to validate input fields

  return { createAdmin, loading, adminObj, setObj };
};
