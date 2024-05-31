import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/homeView.vue';
import brandbookView from '@/views/brandbookView.vue';
import brandingMateriaalView from '@/views/brandingMateriaalView.vue';
import foutjeView from '@/views/foutjeView.vue';
import pageNotFound from '@/views/pageNotFound.vue';

// Importeer de subpagina componenten
import elementenView from '@/views/elementenView.vue';
import iconenView from '@/views/iconenView.vue';
import kleurenView from '@/views/kleurenView.vue';
import typografieView from '@/views/typografieView.vue';
import logoView from '@/views/logoView.vue';

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
            name: "brandbook",
            children: [
                {
                    path: 'logo',
                    component: logoView,
                    name: "Logo"
                },
                {
                    path: 'kleuren',
                    component: kleurenView,
                    name: "Kleuren"
                },
                {
                    path: 'typografie',
                    component: typografieView,
                    name: "Typografie"
                },
                {
                    path: 'elementen',
                    component: elementenView,
                    name: "Elementen"
                },
                {
                    path: 'iconen',
                    component: iconenView,
                    name: "Iconen"
                }
            ]
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
            path: "/:notFound(.*)",
            component: pageNotFound,
            name: "not-found"
        }
    ]
})

export default router;
