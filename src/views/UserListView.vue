<script setup lang="ts">
import { deleteUser } from '@/api/users';
import { useUser } from '@/composables/useUsers';
import { useRouter } from 'vue-router'
import UserListTable from '@/views/UserListTable.vue';
import { onMounted } from 'vue';

const { loading, error, loadUsers, users} = useUser()
const router = useRouter()

onMounted(() => {
  loadUsers()
})

const handleEdit = async(userId: number) => {
  console.log('edit');
  router.push(`/users/${userId}/edit`)
}

const handleDelete = async(userId: number) => {
  // feel like dialog
  if (confirm('Are you sure you want to delete this user?')) {
    try {
      await deleteUser(userId)
      confirm('User Deleted Successfully!')
    } catch (error) {
      console.error(error)
      alert(error.value || 'Failed to deleted user')
    }
  }
}

</script>

<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/create">Add New User</router-link>

    <div v-if="loading">Loading users..</div>
    <div v-if="error">{{ error }}</div>

    <UserListTable :users="users" @edit="handleEdit" @delete="handleDelete"></UserListTable>
  </div>
</template>
