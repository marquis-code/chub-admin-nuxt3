import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const adminActivityLogs = ref([] as any[])
const loading = ref(false)

export const useSuperAdminActivityLogs = () => {
    const getAdminActivityLogs = async (id: any) => {
        adminActivityLogs.value = []
        loading.value = true

        const response = await adminTeamMgtApiFactory.$_get_super_admin_activity_logs(id) as any

        if (response.type !== 'ERROR') {
            adminActivityLogs.value = response.data.data
        }
        loading.value = false
    }

    return { getAdminActivityLogs, loading, adminActivityLogs }
}
