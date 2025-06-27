// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; // Import RouteRecordRaw type

import UserListView from '@/views/UserListView.vue';
import UserCreateView from '@/views/UserCreateView.vue';
import UserEditView from '@/views/UserEditView.vue';

const routes: Array<RouteRecordRaw> = [ // Type the routes array
    {
        path: '/',
        redirect: '/users',
    },
    {
        path: '/users',
        name: 'UserList',
        component: UserListView,
    },
    {
        path: '/users/create',
        name: 'UserCreate',
        component: UserCreateView,
    },
    {
        path: '/users/:id/edit',
        name: 'UserEdit',
        component: UserEditView,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
