import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/',
    },
    // {
    //     path: '/users',
    //     name: 'UserList',
    //     component: UserListView,
    // },
    // {
    //     path: '/users/create',
    //     name: 'UserCreate',
    //     component: UserCreateView,
    // },
    // {
    //     path: '/users/:id/edit',
    //     name: 'UserEdit',
    //     component: UserEditView,
    //     props: true, // Pass route params as props to the component
    // },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
