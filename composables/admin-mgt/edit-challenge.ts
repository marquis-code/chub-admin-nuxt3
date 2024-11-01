import { ref, onMounted } from 'vue';
import { adminTeamMgtApiFactory } from "@/apiFactory/modules/admin-team-mgt";
import { useRouter, useRoute } from 'vue-router';
import { unref, toRaw, isReactive, isRef } from 'vue';
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const loading = ref<boolean>(false);
export const useEditChallenge = () => {
  const router = useRouter();
  const route = useRoute();

  const challengeObj = ref({
    name: '',
    challengeStatus: 'ONGOING',
    challengeType: 'PUBLIC',
    description: '',
    duration: 1,
    startDate: 0,
    endDate: 0,
    color: '',
    reminderOn: true,
    reminderTime: 0,
    tag: '',
    tasks: [],
    imageUrl: '',
    requireVerification: true,
    taskVerification: { type: 'IMAGE' },
    coordinates: [0, 0],
  });

  

  const latitude = ref<number | null>(null);
  const longitude = ref<number | null>(null);
  const error = ref<string | null>(null);
  const localChallenge = ref({});

// Helper function to unwrap proxy and reactive values
// const convertToPlainObject = (challengeData: any) => {
//   const unwrap = (value: any) => {
//     if (isRef(value)) {
//       return unref(value);
//     }
//     if (isReactive(value)) {
//       return { ...value };
//     }
//     return value;
//   };

//   return {
//     challengeStatus: unwrap(challengeData.challengeStatus),
//     challengeType: unwrap(challengeData.challengeType),
//     color: unwrap(challengeData.color),
//     coordinates: unwrap(challengeData.coordinates), // unwrap the Proxy array
//     description: unwrap(challengeData.description),
//     duration: unwrap(challengeData.duration), // unwrap computed
//     endDate: unwrap(challengeData.endDate),
//     imageUrl: unwrap(challengeData.imageUrl),
//     name: unwrap(challengeData.name),
//     reminderOn: unwrap(challengeData.reminderOn),
//     reminderTime: unwrap(challengeData.reminderTime),
//     requireVerification: unwrap(challengeData.requireVerification),
//     startDate: unwrap(challengeData.startDate),
//     tag: unwrap(challengeData.tag),
//     taskVerification: unwrap(challengeData.taskVerification), // unwrap Proxy object
//     tasks: unwrap(challengeData.tasks), // unwrap Proxy array
//   };
// };

// const editChallenge = async (payload: Record<string, any>) => {
//   try {
//     loading.value = true;
//     payload.startDate = new Date(payload.startDate).getTime();
//     payload.endDate = new Date(payload.endDate).getTime();

//     // Convert reactive or proxy data to a plain object
//     const normalObject = convertToPlainObject(payload);
//     console.log(route.params.id, 'Payload sent to API:', normalObject);
//     const res = await adminTeamMgtApiFactory.$_update_admin_challenges(route.params.id, normalObject);
//     console.log('Full API response:', res);

//     if (res.type !== "ERROR") {
//       router.push('/dashboard/challenge');
//     } else {
//       console.error('API error response:', res);
//     }
//   } catch (error) {
//     console.error('Error during challenge update:', error);
//   } finally {
//     loading.value = false;
//   }
// };  

const convertToPlainObject = (challengeData: any) => {
  const unwrap = (value: any) => {
    if (isRef(value)) {
      return unref(value);
    }
    if (isReactive(value)) {
      return { ...value };
    }
    return value;
  };

  // Convert tasks object with numerical keys to an array of objects
  const convertTasksToArray = (tasks: any) => {
    if (typeof tasks === 'object' && tasks !== null) {
      return Object.keys(tasks).map(key => tasks[key]);
    }
    return tasks;
  };

  return {
    challengeStatus: unwrap(challengeData.challengeStatus),
    challengeType: unwrap(challengeData.challengeType),
    color: unwrap(challengeData.color),
    coordinates: unwrap(challengeData.coordinates), // unwrap the Proxy array
    description: unwrap(challengeData.description),
    duration: unwrap(challengeData.duration), // unwrap computed
    endDate: unwrap(challengeData.endDate),
    imageUrl: unwrap(challengeData.imageUrl),
    name: unwrap(challengeData.name),
    reminderOn: unwrap(challengeData.reminderOn),
    reminderTime: unwrap(challengeData.reminderTime),
    requireVerification: unwrap(challengeData.requireVerification),
    startDate: unwrap(challengeData.startDate),
    tag: unwrap(challengeData.tag),
    taskVerification: unwrap(challengeData.taskVerification), // unwrap Proxy object
    tasks: convertTasksToArray(unwrap(challengeData.tasks)) // convert tasks object to array
  };
};

const editChallenge = async (payload: Record<string, any>) => {
  try {
    loading.value = true;
    payload.startDate = new Date(payload.startDate).getTime();
    payload.endDate = new Date(payload.endDate).getTime();

    // Convert reactive or proxy data to a plain object
    const normalObject = convertToPlainObject(payload);
    console.log(route.params.id, 'Payload sent to API:', normalObject);
    const res = await adminTeamMgtApiFactory.$_update_admin_challenges(route.params.id, normalObject);
    console.log('Full API response:', res);

    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Challenge was edited successfully",
        toastType: "success",
        duration: 3000
      });
      router.push('/dashboard/challenge');
      window.location.href = "/dashboard/challenge"
    } else {
      console.error('API error response:', res);
    }
  } catch (error) {
    showToast({
      title: "Error",
      message: "Error during challenge update:",
      toastType: "error",
      duration: 3000
    });
  } finally {
    loading.value = false;
  }
};


  const cancelChallenge = () => {
    challengeObj.value = {
      name: '',
      challengeStatus: 'ONGOING',
      challengeType: 'PUBLIC',
      description: '',
      duration: 1,
      startDate: 0,
      endDate: 0,
      color: '',
      reminderOn: true,
      reminderTime: 0,
      tag: '',
      tasks: [],
      imageUrl: '',
      requireVerification: true,
      taskVerification: { type: 'IMAGE' },
      coordinates: [0, 0],
    };
  };

  const setCoordinates = () => {
    if (latitude.value !== null && longitude.value !== null) {
      challengeObj.value.coordinates = [latitude.value, longitude.value];
    }
  };

  onMounted(() => {
    const localData = JSON.parse(localStorage.getItem('selected-challenge') || '{}');

    if (localData) {
      localChallenge.value = localData;

      challengeObj.value = {
        ...challengeObj.value,
        name: localData.name || '',
        challengeStatus: localData.challengeStatus || 'ONGOING',
        challengeType: localData.challengeType || 'PUBLIC',
        description: localData.description || '',
        duration: localData.duration || 1,
        startDate: new Date(localData.startDate).getTime() || 0,
        endDate: new Date(localData.endDate).getTime() || 0,
        color: localData.color || '',
        reminderOn: localData.reminderOn || true,
        reminderTime: new Date(localData.reminderTime).getTime() || 0,
        tag: localData.tag || '',
        tasks: localData.tasks || [],
        imageUrl: localData.photo?.image || '',
        requireVerification: localData.requireVerification || true,
        taskVerification: localData.taskVerification || { type: 'IMAGE' },
        coordinates: localData.geoLocation?.coordinates || [0, 0],
      };
    }

    // Get current location for coordinates if supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          loading.value = false;
          setCoordinates();
        },
        (err: GeolocationPositionError) => {
          error.value = err.message;
          loading.value = false;
        }
      );
    } else {
      error.value = 'Geolocation is not supported by this browser.';
      loading.value = false;
    }
  });

  return { editChallenge, loading, localChallenge, challengeObj, cancelChallenge, error };
};
