<script setup lang="ts">
import { useUser } from '@/composables/useUsers';
import router from '@/router';
import type { NewUser } from '@/types/User';
import UserForm from '@/views/UserForm.vue';

const {loading, addUser} = useUser()

const handleCancel = () => {
  router.push('/users')
}

const handleSave = async(newUser: NewUser) => {
  try {
    await addUser(newUser)

  } catch (error) {
    console.error(error)
    alert(error.value || 'Failed to create user.')
  }
}

</script>

<template>
  <div>
    <h1>Create New User</h1>
    <UserForm :is-submiting="loading" @cancel="handleCancel" @save="handleSave"></UserForm>
  </div>
</template>
