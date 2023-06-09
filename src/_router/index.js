import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/pages/Index.vue";
import LottoPension from "@/pages/LottoPension.vue";
import store from "@/_stores";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: { title: "논란종결" },
    },
    {
        path: '/money',
        name: 'money',
        component: LottoPension,
        meta: { title: "논란종결 : 복권 vs 연금" },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
});

export default router
