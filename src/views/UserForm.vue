<script setup lang="ts">
import type { NewUser, User } from '@/types/User';
import { ref, watch, type Ref } from 'vue';

/* Props */
interface Props {
  user?: User | null
  isSubmiting: boolean
}

/* Emits */
interface Emits {
  (e: 'save', user: User | NewUser): void;
  (e: 'cancel'): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

watch(() => props.user, (newUser) => {
  if (newUser) {
    formData.value = {
      name: newUser.name,
      email: newUser.email
    }
  } else {
    formData.value = {
      name: '',
      email: ''
    }
  }
}, {deep: true, immediate: true}) //immediate true is mean run on initial

/* State */
const formData: Ref<NewUser> = ref({
  name: props.user?.name || '',
  email: props.user?.email || ''
})

/* Funtion */
const handleSubmit = () => {
  console.log('submit');
}

</script>


<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="">Name:</label>
      <input type="text" name="" id="" >
    </div>
    <div>
      <label for="">Email:</label>
      <input type="email" name="" id="">
    </div>
    <button type="button" @click="$emit('cancel')"></button>
    <button type="submit" :disabled="isSubmiting">{{ isSubmiting ? 'Saving..' : 'Save User' }}</button>
  </form>
</template>
