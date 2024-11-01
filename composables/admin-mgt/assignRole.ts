import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const payload = ref({
    neRole: ''
})
export const useAssignRole = () => {
	const loading = ref(false)
	const assignRole = async (id: string, type: string) => {
		loading.value = true

        const res = (await adminTeamMgtApiFactory.$_assign_roles(id, payload)) as CustomAxiosResponse
        if (res.type !== 'ERROR') {
            console.log(res)
        }
        loading.value = false
    }

	return { assignRole, loading }
}
