import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const payload = ref({
    firstName: '',
    lastName: '',
    phone: ''
})
export const useUpdateAdmin = () => {
	const loading = ref(false)
	const updateAdmin = async (id: string, type: string) => {
		loading.value = true

        const res = (await adminTeamMgtApiFactory.$_update_admin_profile(id, payload))
        if (res.type !== 'ERROR') {
            console.log(res)
        }
        loading.value = false
    }

	return { updateAdmin, loading }
}
