import { useAlert } from '@/composables/core/notification'
import { authApiFactory} from '@/apiFactory/modules/auth'

export const useVerifyLoginSession = () => {
    const router = useRouter()
    const credential = {
        email: ref(''),
        verificationPin: ref('')
    }

    const loading = ref(false)

    const disabled = computed({
		get: () => {
			if (credential.email.value !== '' && !credential.email.value.includes('@')) return true
			if (credential.verificationPin.value === '') return true
			 return false
		},
		set: () => { }
	})

    const verifyLoginSession = async () => {
        loading.value = true
        const res = (await authApiFactory.$_verify_signup_link({
            email: credential.email.value,
            verificationToken: credential.verificationPin.value,
        })) as any
        loading.value = false
        if (res.type !== 'ERROR') {
            useAlert().openAlert({ type: 'SUCCESS', msg: 'Login session was verified successfully.' })
            router.push('/auth/login')
        }
    }

    return { verifyLoginSession, loading, credential, disabled }
}
