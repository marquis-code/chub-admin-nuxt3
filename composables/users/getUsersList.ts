import { ref, computed, onMounted } from 'vue'
import { userApiFactory } from '@/apiFactory/modules/user'

const usersList = ref([])
const searchQuery = ref('')
const loading = ref(false)

export const useGetUsersList = () => {
    const getUsersList = async () => {
        loading.value = true
        usersList.value = []

        const response = await userApiFactory.$_get_users()

        if (response.type !== 'ERROR') {
            usersList.value = response.data.data.users ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getUsersList()
    })

    // Computed property to filter users based on searchQuery
    const filteredUsers = computed(() => {
        return usersList.value.filter((user) =>
            user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })

    return { getUsersList, loading, usersList: filteredUsers, searchQuery }
}
