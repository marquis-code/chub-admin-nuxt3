import { authApiFactory} from '@/apiFactory/modules/auth'
import { useUser } from '@/composables/auth/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const credential = {
	email : ref(''),
}

export const useRequestSignupLink = () => {
	const loading = ref(false)

	const isFormEmpty = computed({
		get: () => {
			if (credential.email.value !== '') return true
			 return false
		},
		set: () => { }
	})

	const requestVerificationLink = async () => {
		loading.value = true
		const res = await authApiFactory.$_request_signup_link({ email: credential.email.value })
		loading.value = false
		if (res.type !== 'ERROR') {
			showToast({
				title: "Success",
				message: "Signup Link was sent to your email",
				toastType: "success",
				duration: 3000
			  });
		}
	}

	return { credential, requestVerificationLink, loading, isFormEmpty }
}
