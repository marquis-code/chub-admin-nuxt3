import { challengeApiFactory } from '@/apiFactory/modules/challange'

const tasksList = ref([] as any[])
const loading = ref(false)

export const useFetchTasks = () => {
    const getTasks = async (id: any) => {
        tasksList.value = []
        loading.value = true

        const response = await challengeApiFactory.$_get_challenge_tasks(id) as any
        if (response.type !== 'ERROR') {
            tasksList.value = response?.data?.data?.tasks
        }
        loading.value = false
    }

    return { getTasks, loading, tasksList }
}
