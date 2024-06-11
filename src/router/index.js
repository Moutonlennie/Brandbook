import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/homeView.vue';
import brandbookView from '@/views/brandbookView.vue';
import brandingMateriaalView from '@/views/brandingMateriaalView.vue';
import foutjeView from '@/views/foutjeView.vue';
import pageNotFound from '@/views/pageNotFound.vue';

//Add
import addlogo from '@/views/backend/logoBackView.vue';
import addElementen from '@/views/backend/elementenBackView.vue';
import addIconen from '@/views/backend/iconenBackView.vue';
import addBrochures from '@/views/backend/brochuresBackView.vue';
import addVisitekaartje from '@/views/backend/visitekaartjeBackView.vue';
import addRollUpBanner from '@/views/backend/rollUpBannersBackView.vue';
import addTemplates from '@/views/backend/templatesBackView.vue';
import addGebruik from '@/views/backend/gebruikBackView.vue';

// Importeer de subpagina componenten
import elementenView from '@/views/elementenView.vue';
import iconenView from '@/views/iconenView.vue';
import kleurenView from '@/views/kleurenView.vue';
import typografieView from '@/views/typografieView.vue';
import logoView from '@/views/logoView.vue';
import loginView from '@/views/loginView.vue';

import brochuresView from '@/views/brochuresView.vue';
import visitekaartjesView from '@/views/visitekaartjesView.vue';
import rollUpBannersView from '@/views/rollUpBannersView.vue';
import templatesView from '@/views/templatesView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: loginView,
            name: "login",
            meta: { hideNavAndFooter: true }
        },
        {
            path: "/home", 
            component: homeView,
            name: "home",
            meta: { requiresAuth: true, hideNavAndFooter: false }
        },        
        {
            path: "/brandbook", 
            component: brandbookView,
            name: "brandbook",
            children: [
                {
                    path: '',
                    redirect: '/brandbook/logo'
                },
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
            ],
            meta: { hideNavAndFooter: false }
        },
        {
            path: "/brandingMateriaal", 
            component: brandingMateriaalView,
            name: "branding materiaal",
            children: [
                {
                    path: '',
                    redirect: '/brandingMateriaal/brochures'
                },
                {
                    path: 'brochures',
                    component: brochuresView,
                    name: "Brochures"
                },
                {
                    path: 'visitekaartjes',
                    component: visitekaartjesView,
                    name: "Visitekaartjes"
                },
                {
                    path: 'rollUpBanners',
                    component: rollUpBannersView,
                    name: "RollUpBanners"
                },
                {
                    path: 'templates',
                    component: templatesView,
                    name: "Templates"
                },
            ],
            meta: { hideNavAndFooter: false }
        },
        {
            path: "/FoutjeIngeslopen", 
            component: foutjeView,
            name: "Foutje ingeslopen",
            meta: { hideNavAndFooter: false }
        },
        {
            path: '/addlogo',
            component: addlogo,
            name: "addlogo"
        },
        {
            path: '/addelementen',
            component: addElementen,
            name: "addElementen"
        },
        {
            path: '/addiconen',
            component: addIconen,
            name: "addIconen"
        },
        {
            path: '/addbrochures',
            component: addBrochures,
            name: "addBrochures"
        },
        {
            path: '/addvisitekaartjes',
            component: addVisitekaartje,
            name: "addVisitekaartjes"
        },
        {
            path: '/addrollupbanners',
            component: addRollUpBanner,
            name: "addRollUpBanners"
        },
        {
            path: '/addtemplates',
            component: addTemplates,
            name: "addTemplates"
        },
        {
            path: '/addgebruik',
            component: addGebruik,
            name: "addGebruik"
        },
        { 
            path: "/:notFound(.*)",
            component: pageNotFound,
            name: "not-found",
            meta: { hideNavAndFooter: false }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        } else {
            return { top: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user');

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/');
    } else {
        next();
    }
});

export default router;
