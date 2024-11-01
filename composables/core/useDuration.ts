import { ref, computed, isRef } from 'vue';

export function useDuration(startDate: any, endDate: any) {
  const parseDate = (date: any) => {
    // Check if the date is already a Date object, otherwise parse it
    if (date instanceof Date) return date;
    return new Date(date); // Parse strings to Date
  };

  const durationInSeconds = computed(() => {
    // Ensure startDate and endDate are properly unwrapped
    const start = isRef(startDate) ? parseDate(startDate.value) : parseDate(startDate);
    const end = isRef(endDate) ? parseDate(endDate.value) : parseDate(endDate);

    if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
      return null; // Invalid dates
    }

    const diff = end.getTime() - start.getTime();

    if (diff < 0) {
      return null; // End date is before start date
    }

    // Convert milliseconds to seconds
    const millisecondsInASecond = 1000;
    const totalSeconds = Math.floor(diff / millisecondsInASecond);

    return totalSeconds;
  });

  return {
    durationInSeconds,
  };
}
