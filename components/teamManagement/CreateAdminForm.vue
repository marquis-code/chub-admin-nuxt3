<template>
  <section>
    <h1 class="text-[#1D1F2C] font-semibold pl-1 text-lg">{{ isModify ? 'Modify Role' : title }}</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4 p-3">
      <div :class="{ 'cursor-not-allowed opacity-40 pointer-events-none': isModify }" class="col-span-full">
        <label
          for="photo"
          class="block text-sm font-medium leading-6 text-[#777980]"
          >Profile Img</label
        >
        <div class="mt-1 flex items-center gap-x-2">
          <div v-if="previewImage" class="relative">
            <img :src="previewImage" alt="Avatar Preview" class="w-16 h-16 rounded-full object-cover" />
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
            Choose Avatar
          </button>
        </div>
      
      </div>
      <div :class="{ 'cursor-not-allowed opacity-40 pointer-events-none': isModify }">
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

      <div :class="{ 'cursor-not-allowed opacity-40 pointer-events-none': isModify }">
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

      <div :class="{ 'cursor-not-allowed opacity-40 pointer-events-none': isModify }">
        <label
          for="phone"
          class="block text-sm font-medium leading-6 text-[#777980]"
          >Phone</label
        >
        <div class="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="formData.phone"
            class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Type phone here. . ."
          />
        </div>
      </div>

      <div>
        <label
          for="role"
          class="block text-sm font-medium leading-6 text-[#777980]"
          >Select Role</label
        >
        <select
          v-model="formData.role"
          id="role"
          name="role"
          class="block w-full rounded-md border-0 outline-none py-3.5 pl-3 bg-[#E0E2E7] text-[#858D9D] shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        >
          <option value="" disabled>Select a role. . .</option>
          <option value="SUPER_ADMIN">Super Admin</option>
          <option value="USER_ADMIN">Admin</option>
        </select>
      </div>
      
      <!-- <div class="flex items-center justify-between pt-6">
        <div>
          <button
            @click="emit('close')"
            type="button"
            class="text-[#858D9D] border border-[#858D9D] rounded-md px-3 py-2 text-sm"
          >
            Cancel
          </button>
        </div>
        <div v-if="member">
          <button
            type="submit"
            class="text-white bg-[#690571] rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="loading"
          >
            <span v-if="!loading">Submit</span>
            <span v-if="loading" class="loader"></span>
          </button>
        </div>
        <div v-if="member && isModify">
          <button
            type="submit"
            class="text-white bg-[#690571] rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="loading"
          >
            <span v-if="!loading">Proceed to assign role</span>
            <span v-if="loading" class="loader"></span>
          </button>
        </div>
        <div v-if="!member">
          <button
            type="submit"
            class="text-white bg-[#690571] disabled:cursor-not-allowed disabled:opacity-25 rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="!isValid || processing"
          >
            <span v-if="!processing">Create Admin</span>
            <span v-if="processing" class="loader"></span>
          </button>
        </div>
      </div> -->
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
        
        <!-- Button for modifying a member and assigning a role -->
        <div v-if="member && isModify">
          <button
            type="submit"
            class="text-white bg-[#690571] rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="updating"
          >
            <span v-if="!updating">Submit</span>
            <span v-else class="loader"></span>
          </button>
        </div>
      
        <!-- Button for submitting a new or modified member -->
        <div v-else-if="member && !isModify">
          <button
            type="submit"
            class="text-white bg-[#690571] rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="loading"
          >
            <span v-if="!loading">Submit</span>
            <span v-else class="loader"></span>
          </button>
        </div>
      
        <!-- Button for creating a new admin when no member exists -->
        <div v-else>
          <button
            type="submit"
            class="text-white bg-[#690571] disabled:cursor-not-allowed disabled:opacity-25 rounded-md px-3 py-2 text-sm flex items-center justify-center"
            :disabled="!isValid || processing"
          >
            <span v-if="!processing">Submit</span>
            <span v-else class="loader"></span>
          </button>
        </div>
      </div>
      
    </form>
  </section>
</template>

<script setup lang="ts">
import { useUpdateAdminProfile } from '@/composables/admin-mgt/updateAdminProfile';
import { useNotification } from '@/composables/core/useNotification';
import { useAssignRoleToAdmin } from '@/composables/admin-mgt/assignRoleToAdmin';

import { useCreateAdmin } from '@/composables/admin-mgt/create-admin'
const { addNotification } = useNotification();
const { updateAdminProfile, loading, setUpdatePayload } = useUpdateAdminProfile();
const { assignRoleToAdmin, setPayload, loading:updating } =  useAssignRoleToAdmin()
const { createAdmin, loading: processing, setObj } = useCreateAdmin()

const props = defineProps({
  title: {
    type: String,
    default: 'Add Admin',
  },
  isModify: {
    type: Boolean,
    default:  false
  },
  member: {
    type: Object,
    default: null,
  }
});

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  role: '',
  avatar: null as File | null,
});

const isValid = computed(() => {
        return (
          formData.name.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.role.trim() !== '' &&
          formData.phone.trim() !== ''
        );
      });

// const handleSubmit = async () => {
//   const [firstName, lastName] = formData.name.split(' ');
//   console.log(firstName, lastName);
//   const payload = {
//     firstName: firstName || formData.name, // Fallback to the entire name if only one name was entered
//     lastName: lastName || formData.name, // Fallback to empty string if lastName is missing
//     phone: formData.phone,
//     role: formData.role,
//   };
//   console.log(payload, 'payload here', props.member?.id);
//   setUpdatePayload(payload);
  
//   if (props.member?.id) {
//     // Edit state
//     await updateAdminProfile(props.member.id);
//     emit('close')
//   } else if (props.member?.id && props.isModify) {
//     const modifyRolePayload = {
//       neRole: formData.role
//     }
//     setPayload(modifyRolePayload)
//     await assignRoleToAdmin(props.member?.id)
//   } else {
//     const createAdminPayload = {
//          name : formData.name,
//          email : formData.email,
//          phone : formData.phone,
//          role : formData.role,
//          photo : formData.avatar
//     }
//     setObj(createAdminPayload)
//     await createAdmin()
//     emit('close')
//   }
// };

const handleSubmit = async () => {
  const [firstName, lastName] = formData.name.split(' ');
  console.log(firstName, lastName);
  const payload = {
    firstName: firstName || formData.name, // Fallback to the entire name if only one name was entered
    lastName: lastName || '', // Fallback to an empty string if lastName is missing
    phone: formData.phone,
    role: formData.role,
  };
  console.log(payload, 'payload here', props.member?.id);
  setUpdatePayload(payload);
  
  if (props.member?.id && props.isModify) {
    // Modify role state
    const modifyRolePayload = {
      newRole: formData.role
    };
    console.log(modifyRolePayload, 'here oo')
    setPayload(modifyRolePayload);
    await assignRoleToAdmin(props.member.id);
    emit('close');
  } else if (props.member?.id) {
    // Edit existing admin profile
    await updateAdminProfile(props.member.id);
    emit('close');
  } else {
    // Create a new admin
    const createAdminPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      photo: formData.avatar
    };
    setObj(createAdminPayload);
    await createAdmin();
    emit('close');
  }
};


const emit = defineEmits<{
  (event: 'close'): void;
}>();

const fileInput = ref(null);
const previewImage = ref<string | null>(null);

// Populate form fields based on edit or create state
if (props.member) {
  // Edit state - merge first and last name into the name field
  formData.name = `${props.member.firstName || ''} ${props.member.lastName || ''}`.trim();
  formData.email = props.member.email || '';
  formData.phone = props.member.phone || '';
  formData.role = props.member.role || '';
  previewImage.value = props.member.photo?.image || null; // Use member's image if available
} else {
  // Create state - keep form empty (optional: set defaults)
  formData.name = '';
  formData.email = '';
  formData.phone = '';
  formData.role = '';
  previewImage.value = null;
}

const triggerFileInput = () => {
  (fileInput.value as HTMLInputElement)?.click();
};

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    formData.avatar = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = () => {
  formData.avatar = null;
  previewImage.value = props.member?.photo?.image || null; // Revert to the existing image if available
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
