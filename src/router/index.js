import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/homeView.vue';
import brandbookView from '@/views/brandbookView.vue';
import brandingMateriaalView from '@/views/brandingMateriaalView.vue';
import foutjeView from '@/views/foutjeView.vue';
import pageNotFound from '@/views/pageNotFound.vue';
import logoAdd from '@/views//backend/logoBackView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            component: homeView,
            name: "home"
        },
        {
            path: "/brandbook", 
            component: brandbookView,
            name: "brandbook"
        },
        {
            path: "/Branding materiaal", 
            component: brandingMateriaalView,
            name: "Branding materiaal"
        },
        {
            path: "/Foutje ingeslopen", 
            component: foutjeView,
            name: "Foutje ingeslopen"
        },
        {
            path: "/Addlogo", 
            component: logoAdd,
            name: "Add logo"
        },
        { 
            path: "/:notFound(.*)",
            component: pageNotFound

        }
    ]
})

export default router;