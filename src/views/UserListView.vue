<script setup lang="ts">
import UserListTable from '@/views/UserListTable.vue';
</script>

<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/create">Add New User</router-link>

    <!-- <div v-if="loading">Loading users..</div>
    <div v-if="error">{{ error }}</div> -->

    <UserListTable></UserListTable>
  </div>
</template>
