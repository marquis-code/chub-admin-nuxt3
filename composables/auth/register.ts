import { authApiFactory } from '@/apiFactory/modules/auth'
import { useUser } from '@/composables/auth/user'

const credential = {
  firstname: ref(''),
  lastname: ref(''),
  password: ref(''),
}

export const useRegister = () => {
  const loading = ref(false)
  const { token, createUser } = useUser()

  const isFormEmpty = computed(() => {
    return credential.firstname.value === '' || credential.lastname.value === '' || credential.password.value === ''
  })

  const register = async () => {
    loading.value = true

    try {
      const res = await authApiFactory.$_signup({
        firstname: credential.firstname.value,
        lastname: credential.lastname.value,
        password: credential.password.value
      }, {
        headers: {
          'x-registration-token': token // Setting the token in the headers
        }
      }) as any

      if (res.type !== 'ERROR') {
        createUser(res.data)
        location.assign('/auth')
      }
    } catch (error) {
      console.error("Registration failed", error)
    } finally {
      loading.value = false
    }
  }

  return { credential, register, loading, isFormEmpty }
}
