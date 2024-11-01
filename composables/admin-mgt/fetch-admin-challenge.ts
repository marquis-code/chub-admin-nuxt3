
// useChallengeList.ts
import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'
import { ref, onMounted, watch } from 'vue'

export const filters = ref({
  status: [] as string[],
  type: [] as string[],
  date: { startDate: '', endDate: '' },
  goals: [] as string[]
})

const tabFilter = ref('')

export const useChallengeList = () => {
  const challengeList = ref<any[]>([])
  const loading = ref<boolean>(false)

  const getChallengeList = async () => {
    loading.value = true

    try {
      const { status, type, date, goals } = filters.value
      const queryParams: Record<string, any> = {
        limit: 20,  // Default limit
        page: 1,    // Default page
        ...(status.length && { challengeStatus: status.join(',') }), // Main filters status
        ...(type.length && { generatedBy: type.join(',') }),
        ...(date.startDate && { startDate: date.startDate }),
        ...(date.endDate && { endDate: date.endDate }),
        ...(goals.length && { tag: goals.join(',') }),
        ...(tabFilter.value && { challengeStatus: tabFilter.value.toUpperCase() }) // Use tabFilter as standalone challenge status
      }

      const response = await adminTeamMgtApiFactory.$_get_admin_challenges(queryParams) as any
      if (response.type !== 'ERROR') {
        challengeList.value = response?.data?.data?.challenges || []
      }
    } catch (error) {
      console.error('Failed to fetch challenge list:', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    getChallengeList() // Initial fetch with default values
  })

  watch(filters, () => {
    getChallengeList() // Refetch when filters change
  }, { deep: true })

  watch(tabFilter, () => {
    getChallengeList() // Refetch when tabFilter changes
  })

  return { getChallengeList, loading, challengeList, tabFilter }
}
