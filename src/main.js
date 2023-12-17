// noinspection ES6UnusedImports,JSFileReferences

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line no-unused-vars
import LoginComponent from './components/Login.vue';
// eslint-disable-next-line no-unused-vars
import SignupComponent from './components/Signup.vue';
// eslint-disable-next-line no-unused-vars
import TaskFormComponent from './components/TaskForm.vue';
// eslint-disable-next-line no-unused-vars
import TaskListComponent from './components/TaskList.vue';

// Your existing code...


const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
