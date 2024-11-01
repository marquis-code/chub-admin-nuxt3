import { adminTeamMgtApiFactory } from '@/apiFactory/modules/admin-team-mgt'

const obj = ref({
    name: "",
    challengeStatus: "",
    challengeType: "",
    description: "",
    duration: null,
    startDate: "",
    endDate: "",
    color: "",
    reminderOn: false,
    reminderTime: "",
    tag: "string",
    tasks: [],
    imageUrl: "",
    requireVerification: false,
    taskVerification: {
      type: "",
    },
    coordinates: [],
})

const updating = ref(false)
const loading = ref(false)
const challengeInfo = ref({}) as Ref<Record<string, any>>
const populateForm = () => {
	obj.value.name = challengeInfo.value.name
	obj.value.challengeStatus = challengeInfo.value.challengeStatus
	obj.value.challengeType = challengeInfo.value.challengeType
    obj.value.description = challengeInfo.value.description
    obj.value.duration = challengeInfo.value.duration
	obj.value.startDate = challengeInfo.value.startDate
    obj.value.endDate = challengeInfo.value.endDate
    obj.value.color = challengeInfo.value.color
    obj.value.reminderOn = challengeInfo.value.reminderOn
    obj.value.reminderTime = challengeInfo.value.reminderTime
    obj.value.tag = challengeInfo.value.tag
    obj.value.tasks = challengeInfo.value.tasks
    obj.value.imageUrl = challengeInfo.value.imageUrl
    obj.value.requireVerification = challengeInfo.value.requireVerification
    obj.value.taskVerification = challengeInfo.value.taskVerification
    obj.value.coordinates = challengeInfo.value.coordinates
}

export const useUpdateChallenge = () => {
	const updateChallenge = async () => {
		const id = useRoute().params.id as string
		const payload = {
            name: obj.value.name,
            challengeStatus: obj.value.challengeStatus,
            challengeType: obj.value.challengeType,
            description: obj.value.description,
            duration: obj.value.duration,
            startDate: obj.value.startDate,
            endDate: obj.value.endDate,
            color: obj.value.color,
            reminderOn: obj.value.reminderOn,
            reminderTime: obj.value.reminderTime,
            tag: obj.value.tag,
            tasks: obj.value.tasks,
            imageUrl: obj.value.imageUrl,
            requireVerification: obj.value.requireVerification,
            taskVerification: obj.value.taskVerification,
            coordinates: obj.value.coordinates,
		}
		updating.value = true
		const res = await adminTeamMgtApiFactory.$_update_admin_challenges(payload)
        if (res.type !== 'ERROR') {
            console.log('Challenge was updated successfully')
            window.location.href = "/dashboard/challenge"
        }
		updating.value = false
	}

	return { loading, updating, ...obj, updateChallenge, populateForm, challengeInfo }
}
