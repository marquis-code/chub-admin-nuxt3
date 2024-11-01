import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();


export const useSuspendAdmin = () => {
	const loading = ref(false)
	const suspendAdmin = async (id: string) => {
		loading.value = true

        const res = await adminTeamMgtApiFactory.$_suspend_admin(id) as any
        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Admin was suspended successfully",
                toastType: "success",
                duration: 3000
              });
              return res
        }
        loading.value = false
    }

	return { suspendAdmin, loading }
}
