import { useAlert } from '@/composables/core/notification'
import { authApiFactory} from '@/apiFactory/modules/auth'

export const useRequestSignupLink = () => {
    const router = useRouter()
    const payload = {
        email: ref(''),
    }

    const loading = ref(false)

    const disabled = computed({
        get: () => {
            if (payload.email.value === '') return true
            return false
        },
        set: () => { }
    })

    const requestSignupLink = async () => {
        loading.value = true
        const res = (await authApiFactory.$_request_signup_link({
            email: payload.email.value
        })) as any
        loading.value = false
        if (res.type !== 'ERROR') {
            useAlert().openAlert({ type: 'SUCCESS', msg: 'Signup Link was sent successfully' })
            router.push('/auth/login')
        }
    }

    return { payload, loading, requestSignupLink, disabled }
}
