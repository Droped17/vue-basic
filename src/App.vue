<!-- TS -->
<script setup lang="ts">
import UserListView from '@/views/UserListView.vue'
import { useUser } from './composables/useUsers';
import { onMounted } from 'vue';

const {users, loadUsers} = useUser()

onMounted(() => {
  loadUsers()
})

</script>

<!-- HTML -->
<template>
  <div class="flex flex-col gap-2 px-8 py-8">
    <UserListView></UserListView>
    <div v-for="(user) in users" :key="user.id">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

