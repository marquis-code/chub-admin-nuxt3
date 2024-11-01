import { useAlert } from '@/composables/core/notification'
import { authApiFactory} from '@/apiFactory/modules/auth'
import { useUser } from '@/composables/auth/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const useVerifyOtp = () => {
    const { createUser } = useUser()
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

    const verifyOtp = async () => {
        loading.value = true
        const otp = String(credential?.verificationPin?.value?.join(""));
        const res = (await authApiFactory.$_verify_login_session({
            email: credential.email.value,
            verificationPin: otp
        })) as any
        console.log(res, 'res here')
        loading.value = false
        if (res.type !== 'ERROR') {
            createUser(res.data)
            showToast({
                title: "Success",
                message: 'Login session was verified successfully.',
                toastType: "success",
                duration: 3000
              });
            router.push('/dashboard')
        }
    }

    const setPayload = (data: any) => {
        credential.email.value = data.email;
        credential.verificationPin.value = data.verificationPin;
    }

    return { verifyOtp, loading, credential, disabled, setPayload }
}
