<template>
    <section>
      <h1 class="text-[#1D1F2C] font-semibold pl-1 text-lg">Edit Profile</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4 p-3">
        <div class="col-span-full">
          <label
            for="photo"
            class="block text-sm font-medium leading-6 text-[#777980]"
            >Profile Img</label
          >
          <div class="mt-1 flex items-center gap-x-2">
            <div v-if="previewImage" class="relative">
              <img :src="previewImage" alt="imageUrl Preview" class="w-16 h-16 rounded-full object-cover" />
              <button
                @click="removeImage"
                type="button"
                class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
              >
                &#x2716;
              </button>
            </div>
            <div v-else>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#F4ECFB" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.42773 52.4999C13.2977 45.4715 22.1266 41 32 41C41.8734 41 50.7025 45.4716 56.5724 52.5001C50.7025 59.5285 41.8735 64 32.0002 64C22.1268 64 13.2977 59.5284 7.42773 52.4999Z"
                  fill="#FF5724"
                />
                <circle cx="32" cy="25" r="12" fill="#FF5724" />
              </svg>
            </div>
            <input
              type="file"
              ref="fileInput"
              @change="handleImageUpload"
              class="hidden"
            />
            <button
              type="button"
              @click="triggerFileInput"
              class="rounded-md bg-white px-2.5 text-[#FF5724] py-1.5 text-sm font-semibold"
            >
              Choose imageUrl
            </button>
          </div>
        
        </div>
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-[#777980]"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              v-model.trim="formData.name"
              class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Type name here. . ."
            />
          </div>
        </div>
  
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-[#777980]"
            >Email</label
          >
          <div class="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              v-model="formData.email"
              class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Type email here. . ."
            />
          </div>
        </div>
  
        <div>
          <label
            for="status"
            class="block text-sm font-medium leading-6 text-[#777980]"
            >Status</label
          >
          <select
            v-model="formData.status"
            id="status"
            name="status"
            class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          >
            <option value="" disabled>Select a status . .</option>
            <option value="ACTIVE">ACTIVE</option>
          </select>
        </div>
        
        <div class="flex items-center justify-between pt-6">
          <div>
            <button
              @click="emit('close')"
              type="button"
              class="text-[#858D9D] border border-[#858D9D] rounded-md px-3 py-2 text-sm"
            >
              Cancel
            </button>
          </div>
        

          <!-- Button for creating a new admin when no user exists -->
          <div>
            <button
              type="submit"
              class="text-white bg-[#690571] disabled:cursor-not-allowed disabled:opacity-25 rounded-md px-3 py-2 text-sm flex items-center justify-center"
              :disabled="loading"
            >
              <span v-if="!loading">Submit</span>
              <span v-else class="loader"></span>
            </button>
          </div>
        </div>
        
      </form>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useUpdateUserProfile } from '@/composables/users/updateProfile';
  const { updateUserProfile, loading, setUpdatePayload } = useUpdateUserProfile();
  
  const props = defineProps({
    user: {
      type: Object,
      default: null,
    }
  });
  
  const formData = reactive({
    name: '',
    email: '',
    status: '',
    imageUrl: null as File | null,
  });

  
  const handleSubmit = async () => {
    // const [firstName, lastName] = formData.name.split(' ');
    // console.log(firstName, lastName);
    const payload = {
      name: formData.name, // Fallback to the entire name if only one name was entered
      email: formData.email,
      status: formData.status,
    };
    console.log(payload, 'payload here', props.user?.id);
    setUpdatePayload(payload);

      // Edit existing admin profile
      await updateUserProfile(props.user.id);
      emit('close');
  };
  
  
  const emit = defineEmits<{
    (event: 'close'): void;
  }>();
  
  const fileInput = ref(null);
  const previewImage = ref<string | null>(null);
  
  // Populate form fields based on edit or create state
  if (props.user) {
    // Edit state - merge first and last name into the name field
    formData.name = `${props.user.firstName || ''} ${props.user.lastName || ''}`.trim();
    formData.email = props.user.email || '';
    formData.status = props.user.status || '';
    previewImage.value = props.user.photo?.image || null; // Use user's image if available
  } 
  
  const triggerFileInput = () => {
    (fileInput.value as HTMLInputElement)?.click();
  };
  
  const handleImageUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      formData.imageUrl = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImage.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    formData.imageUrl = null;
    previewImage.value = props.user?.photo?.image || null; // Revert to the existing image if available
  };
  </script>
  
  
  
  <style scoped>
  .loader {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #690571; /* Purple */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  