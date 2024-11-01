import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt';
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const payload = ref({
    firstName: '',
    lastName: '',
    phone: '',
    role: ''
});

export const useUpdateAdminProfile = () => {
    const loading = ref(false);

    const updateAdminProfile = async (id: string) => {
        loading.value = true;
        try {
            const res = (await adminTeamMgtApiFactory.$_update_admin_profile(id, payload.value)) as any;
            console.log(res, 'res jere');
            if (res.type !== 'ERROR') {
                showToast({
                    title: "Success",
                    message: "Admin profile was updated successfully",
                    toastType: "success",
                    duration: 3000
                  });
            }
        } catch (error) {
            showToast({
                title: "Error",
                message: "Error updating admin profile",
                toastType: "error",
                duration: 3000
              });
        } finally {
            loading.value = false;
        }
    };

    const setUpdatePayload = (data: any) => {
        payload.value.firstName = data.firstName; // The first part is assumed to be the first name

        // Check if there's a second part for the last name
        payload.value.lastName = data.lastName;

        payload.value.phone = data.phone;

        payload.value.role = data.role;
    };

    return { updateAdminProfile, loading, setUpdatePayload };
};
