import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const adminTeams = ref([] as any[])
const loading = ref(false)

export const useAdminTeams = () => {
    const getAdminTeams = async () => {
        adminTeams.value = []
        loading.value = true

        const response = await adminTeamMgtApiFactory.$_get_admin_team() as any
        console.log(response?.data?.data?.teamMembers, 'here admin teamfghjkl;kjhgfghjk')

        if (response.type !== 'ERROR') {
            adminTeams.value = response?.data?.data?.teamMembers
        }
        loading.value = false
    }

    onMounted(() => {
        getAdminTeams()
    })

    return { getAdminTeams, loading, adminTeams }
}
