import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const payload = ref({
    neRole: ''
})
export const useAssignRoleToAdmin = () => {
	const loading = ref(false)
	const assignRoleToAdmin = async (id: string) => {
		loading.value = true

        const res = (await adminTeamMgtApiFactory.$_assign_role_admin(payload.value, id)) as any
        console.log(res.data.message, 'res here')
        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Role was updated successfully!",
                toastType: "success",
                duration: 3000
              });
        } else {
            showToast({
                title: "Error",
                message: res?.data?.message || "Something went wrong",
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
    }

    const setPayload = (data: any) => {
        console.log(data, 'from composable')
        payload.value.neRole = data.newRole
    }

	return { assignRoleToAdmin, loading, payload, setPayload  }
}
