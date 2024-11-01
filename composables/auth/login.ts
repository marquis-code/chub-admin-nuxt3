import { useUser } from '@/composables/auth/user'
import { authApiFactory} from '@/apiFactory/modules/auth'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

	const credential = {
		email: ref(''),
		fcmToken: ref(''),
		password: ref('')
	}

export const useLogin = () => {
	const router = useRouter()

	const loading = ref(false)

	const isFormEmpty = computed({
		get: () => {
			if (credential.email.value !== '' && !credential.email.value.includes('@')) return true
			if (credential.fcmToken.value !== '') return true
			if (credential.password.value === '') return true
			 return false
		},
		set: () => { }
	})

	const login = async () => {
		loading.value = true
		let res
		res = (await authApiFactory.$_login({
		  email: credential.email.value,
		  password: credential.password.value,
		})) as any
		console.log(res, 'res here')
		loading.value = false
		if (res.type !== 'ERROR') {
			showToast({
				title: "Success",
				message: "Login OTP was sent successfully, please verify your OTP.",
				toastType: "success",
				duration: 3000
			  });
			router.push({
				path: '/auth/verify-otp',
				query: { email: credential.email.value }
			})
		} else {
			showToast({
				title: "Error",
				message: res.data.message,
				toastType: "error",
				duration: 3000
			  });
		}
}

return { credential, login, loading, isFormEmpty }

}