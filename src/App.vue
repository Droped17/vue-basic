<!-- TS -->
<script setup lang="ts">
import UserListView from '@/views/UserListView.vue'
import { useUser } from './composables/useUsers';
import { onMounted } from 'vue';

const {loadUsers, loading, error} = useUser()

/* Load template success them loadUsers */
onMounted(() => {
  loadUsers()
})

</script>

<!-- HTML -->
<template>
  <div class="flex flex-col gap-2 px-8 py-8">
    <UserListView></UserListView>
    <div v-if="loading">Loading..</div>
    <div v-if="error">{{ error }}</div>


    <!-- feel like .map() for react -->
    <!-- <div v-for="(user) in users" :key="user.id">
      <p>{{ user.name }}</p>
    </div> -->

  </div>
</template>

