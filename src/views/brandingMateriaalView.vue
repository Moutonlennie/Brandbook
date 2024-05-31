<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';

export default {
    components: {
        cardTweeComponent
    },
    data() {
        return {
            navItems: [
                {
                    path: '/Brochures',
                    name: 'brochures',
                },
                {
                    path: "/Visitekaartjes",
                    name: "visitekaartjes",
                },
                {
                    path: '/Banners',
                    name: 'banners',
                }
            ]
        }
    }
}
</script>

<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
            <nav class="zijNavigatie">
                <ul>
                    <li v-for="navItem in navItems" :key="navItem.name" >
                        <router-link v-bind:to="navItem.path">
                            <ul v-if="navItem.name === 'brochures'">
                                <li class="nav-title">Brochures</li>
                            </ul>
                            <ul v-else-if="navItem.name === 'visitekaartjes'">
                                <li class="nav-title">Visitekaartjes</li>
                            </ul>
                            <ul v-else-if="navItem.name === 'banners'">
                                <li class="nav-title">Banners</li>
                            </ul>
                            <ul v-else-if="navItem.name === 'templates'">
                                <li class="nav-title">Templates</li>
                                <div class="nav-sub">
                                    <li class="inspringing">Do's</li>
                                    <li class="inspringing">Don'ts</li>
                                </div>
                            </ul>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="page">
            <div id="brandbook-right">
                <cardTweeComponent/>
            </div>
        </div>
    </div>
</template>