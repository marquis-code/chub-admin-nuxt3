import { userApiFactory } from '@/apiFactory/modules/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const payload = ref({
    name: '',
    email: '',
    imageUrl: '',
    status: ''
});

export const useUpdateUserProfile = () => {
    const loading = ref(false);

    const updateUserProfile = async (id: string) => {
        loading.value = true;
        try {
            const res = (await userApiFactory.$_update_user_profile(id, payload.value)) as any;
            console.log(res, 'res jere');
            if (res.type !== 'ERROR') {
                showToast({
                    title: "Success",
                    message: "User profile was updated successfully",
                    toastType: "success",
                    duration: 3000
                  });
            }
        } catch (error) {
            showToast({
                title: "Error",
                message: "Error updating user profile",
                toastType: "error",
                duration: 3000
              });
        } finally {
            loading.value = false;
        }
    };

    const setUpdatePayload = (data: any) => {

        // Check if there's a second part for the last name
        payload.value.name = data.name;

        payload.value.email = data.email;

        payload.value.imageUrl = data.imageUrl;

        payload.value.status = data.status;
    };

    return { updateUserProfile, loading, setUpdatePayload };
};
