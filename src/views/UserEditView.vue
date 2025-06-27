<script setup lang="ts">
import { updateUser } from '@/api/users';
import { useUser } from '@/composables/useUsers';
import router from '@/router';
import type { User } from '@/types/User';
import UserForm from '@/views/UserForm.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const {loading,loadUser, error} = useUser()

const route = useRoute()
const userId = parseInt(route.params.id as string)

onMounted(() => {
  if (!isNaN(userId)) {
    loadUser(userId)
  } else {
    error.value = "Invalid User ID"
  }
})

const handleCancel = () => {
    router.push('/users');
};

const handleSave = async (updatedUserData: User) => {
    try {
        await updateUser(userId, updatedUserData);
        alert('User updated successfully!');
        router.push('/users'); // Redirect to user list
    } catch (err) {
        alert(error.value || 'Failed to update user.');
    }
};

</script>

<template>
  <div>
    <h1>Edit User</h1>
    <div v-if="loading">Loading..</div>
    <div v-if="error">{{ error }}</div>

    <UserForm :is-submiting="loading" @cancel="handleCancel" @save="handleSave"></UserForm>

  </div>
</template>
