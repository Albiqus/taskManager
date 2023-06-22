import TasksMain from "@/components/Main/TasksMain.vue";
import WelcomePage from "@/components/WelcomePage/WelcomePage.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/tasks',
        component: TasksMain
    },
    {
        path: '/',
        component: WelcomePage
    }
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

