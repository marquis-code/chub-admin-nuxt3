import { ref, computed } from '@vue/reactivity'
import { useStorage } from '@vueuse/core'

const runtimeData = {
	auth: ref(),
	user: ref({} as any),
	token: ref(''),
}
const localstorageDate = {
	auth: ref(),
	user: useStorage('user', {} as any),
	token: useStorage('token', ''),
}
watch(runtimeData.user, (val) => {
	Object.keys(val).forEach((key) => {
		localstorageDate.user.value[key] = val[key]
	})
}, { deep: true });

(() => {
	runtimeData.auth.value = localstorageDate.auth.value
	runtimeData.user.value = localstorageDate.user.value
	runtimeData.token.value = localstorageDate.token.value
})()

export const useUser = () => {
	const id = computed({
		get: () => runtimeData?.auth?.value?.id ?? '', set: () => { }
	})

	const isLoggedIn = computed({
		get: () => {
			if (!runtimeData.token?.value) return false
			return runtimeData?.user?.value != null || undefined || {}
		},
		set: () => { }
	})
	const logOut = () => {
		localStorage.clear()
		runtimeData.user.value = null
		location.href = '/auth'
	}
	const setToken = (token: string) => {
		runtimeData.token.value = token
		localstorageDate.token.value = token
	}
	const createUser = (user: any) => {
		console.log(user, 'user from user composable')
		runtimeData.user.value = user?.data.admin
		localstorageDate.token.value = user?.accessToken
		runtimeData.token.value = user?.accessToken
	}
	const updateUser = (user: any) => {
		runtimeData.user.value = user?.data.admin
		localstorageDate.user.value = user?.accessToken
	}

	return { id, isLoggedIn, createUser, ...runtimeData, logOut, updateUser, setToken }
}
