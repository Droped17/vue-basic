<script setup lang="ts">
import type { User } from '@/types/User';

interface Props {
  users: User[]
}

interface Emits {
(e: 'edit', id: number): void;
  (e: 'delete', id: number): void;
}

defineProps<Props>()
defineEmits<Emits>()


</script>

<template>
  <table class="border">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td class="flex gap-2">
           <button @click="$emit('edit', user.id)">edit</button>
           <button @click="$emit('delete',user.id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
