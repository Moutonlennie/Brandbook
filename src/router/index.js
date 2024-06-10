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

// Importeer de subpagina componenten
import elementenView from '@/views/elementenView.vue';
import iconenView from '@/views/iconenView.vue';
import kleurenView from '@/views/kleurenView.vue';
import typografieView from '@/views/typografieView.vue';
import logoView from '@/views/logoView.vue';
import loginView from '@/views/loginView.vue';

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
                    path: '', // Geen specifieke pad voor brandbookView
                    redirect: '/brandbook/logo' // Redirect naar logoView
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
            path: "/Branding materiaal", 
            component: brandingMateriaalView,
            name: "Branding materiaal",
            meta: { hideNavAndFooter: false }
        },
        {
            path: "/Foutje ingeslopen", 
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
