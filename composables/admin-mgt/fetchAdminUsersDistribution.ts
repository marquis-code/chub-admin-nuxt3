import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const adminUserDistribution = ref({} as any[])
const loading = ref(false)

export const useAdminUserDistribution = () => {
    const getAdminTeams = async () => {
        adminUserDistribution.value = []
        loading.value = true

        const response = await adminTeamMgtApiFactory.$_get_admin_user_distribution()
        if (response.type !== 'ERROR') {
            adminUserDistribution.value = response.data.data
        }
        loading.value = false
    }

    onMounted(() => {
        getAdminTeams()
    })

    return { getAdminTeams, loading, adminUserDistribution }
}