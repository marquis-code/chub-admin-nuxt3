import { ref, onMounted } from 'vue';
import { adminTeamMgtApiFactory } from "@/apiFactory/modules/admin-team-mgt";
import { useCustomToast } from '@/composables/core/useCustomToast'

// Challenge Object
const challengeObj = ref({
  name: '',
  challengeStatus: 'ONGOING',
  challengeType: 'PUBLIC',
  description: '',
  duration: 1, // Duration will be a number representing total days
  startDate: 0, // Will be stored as a timestamp
  endDate: 0, // Will be stored as a timestamp
  color: '',
  reminderOn: true,
  reminderTime: 0,
  tag: '',
  tasks: [],
  imageUrl: 'https://images.unsplash.com/photo-1725941421510-82f1b0e14696?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  requireVerification: true,
  taskVerification: { type: 'IMAGE' },
  coordinates: [0, 0] // Default coordinates
});

// Function to calculate the duration in days
const calculateDuration = () => {
  if (challengeObj.value.startDate && challengeObj.value.endDate) {
    const differenceInMs = challengeObj.value.endDate - challengeObj.value.startDate; // Ensure endDate is greater than startDate

    // Convert milliseconds to total days
    const totalDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return totalDays;
  } else {
    alert('Please provide both start and end dates in milliseconds.');
    return 0; // Return 0 as default if there's an issue
  }
};

export const useCreateChallenge = () => {
  const { showToast } = useCustomToast();
  const router = useRouter()
  const latitude = ref<number | null>(null);
  const longitude = ref<number | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(true); // Set loading to true initially

  const createChallenge = async () => {
    loading.value = true;

    // Convert the startDate and endDate to timestamps before sending
    challengeObj.value.startDate = new Date(challengeObj.value.startDate).getTime();
    challengeObj.value.endDate = new Date(challengeObj.value.endDate).getTime();
    challengeObj.value.duration = calculateDuration(); // Store duration as a total number of days

    const res = await adminTeamMgtApiFactory.$_create_admin_challenges(challengeObj.value) as any
    if (res.type !== "ERROR") {
      loading.value = false;
      showToast({
        title: "Success",
        message: "Challenge was successfully created",
        toastType: "success",
        duration: 3000
      });
      router.push('/dashboard/challenge')
      window.location.href = "/dashboard/challenge"
    }
    loading.value = false;
  };

  const cancelChallenge = () => {
    // Reset the form
    challengeObj.value = {
      name: '',
      challengeStatus: 'ONGOING',
      challengeType: 'PUBLIC',
      description: '',
      duration: 1,
      startDate: 0, // Reset date
      endDate: 0, // Reset date
      color: '',
      reminderOn: true,
      reminderTime: 0,
      tag: '',
      tasks: [],
      imageUrl: '',
      requireVerification: true,
      taskVerification: { type: 'IMAGE' },
      coordinates: [0, 0] // Reset coordinates
    };
  };

  // Function to set coordinates from navigator geolocation
  const setCoordinates = () => {
    if (latitude.value !== null && longitude.value !== null) {
      challengeObj.value.coordinates = [latitude.value, longitude.value];
    }
  };

  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          loading.value = false; // Stop loading
          setCoordinates(); // Populate coordinates
        },
        (err: GeolocationPositionError) => {
          error.value = err.message;
          loading.value = false; // Stop loading
        }
      );
    } else {
      error.value = 'Geolocation is not supported by this browser.';
      loading.value = false; // Stop loading
    }
  });

  return { createChallenge, loading, challengeObj, cancelChallenge, error };
};
