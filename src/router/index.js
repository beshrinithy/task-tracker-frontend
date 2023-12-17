// noinspection ES6UnusedImports,JSUnresolvedReference,JSFileReferences

import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line no-unused-vars
import HomeComponent from '../views/HomeView.vue';
import LoginComponent from '../components/Login.vue';
import SignupComponent from '../components/Signup.vue';
import TaskFormComponent from '../components/TaskForm.vue';
import TaskListComponent from '../components/TaskList.vue';

const routes = [
    // eslint-disable-next-line no-unused-vars
    { path: '/Login', component: LoginComponent },
    // eslint-disable-next-line no-undef
    { path: '/Signup', component: SignupComponent },
    // eslint-disable-next-line no-undef
    { path: '/TaskForm', component: TaskFormComponent},
    // eslint-disable-next-line no-undef
    { path: '/TaskList', component: TaskListComponent },
    // eslint-disable-next-line no-undef
    { path: '/', component: HomeComponent },
    // ... other routes
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
