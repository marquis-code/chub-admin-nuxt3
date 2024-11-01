import { ref } from 'vue';

export const useGeolocation = () => {
  const latitude = ref<number | null>(null);
  const longitude = ref<number | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const getLocation = () => {
    loading.value = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          loading.value = false;
        },
        (err: GeolocationPositionError) => {
          error.value = err.message;
          loading.value = false;
        }
      );
      console.log(longitude.value, 'Here')
    } else {
      error.value = 'Geolocation is not supported by this browser.';
      loading.value = false;
    }
  }

  onMounted(() => {
    getLocation()
  })

  return {
    latitude,
    longitude,
    error,
    loading,
    getLocation,
  };
};
