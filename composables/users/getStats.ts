import { userApiFactory } from '@/apiFactory/modules/user'

const statsObj = ref({}) as any
const loading = ref(false)

export const useGetUserStats =  () => {
    const getUserStats = async () => {
        statsObj.value = {}
        loading.value = true

        const response = await userApiFactory.$_get_users_stats() as any
        console.log(response.data.data, 'here')

        if (response.type !== 'ERROR') {
            statsObj.value = response.data.data ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getUserStats()
    })

    return { getUserStats, loading, statsObj }
}