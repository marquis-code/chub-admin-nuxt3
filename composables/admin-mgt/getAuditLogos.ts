import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const auditLogsList = ref([] as any[])
const loading = ref(false)

export const useGetAuditLogs =  () => {
    const getAuditLogs = async () => {
        auditLogsList.value = []
        loading.value = true

        const response = await adminTeamMgtApiFactory.$_get_audit_logs()

        if (response.type !== 'ERROR') {
            auditLogsList.value = response.data.data.teamMembers ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getAuditLogs()
    })

    return { getAuditLogs, loading, auditLogsList }
}