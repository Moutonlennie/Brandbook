<script>
import cardComponent from '@/componenten/cardComponent.vue';

export default {
    components: {
        cardComponent
    },
    data() {
        return {
            navItems: [
                {
                    path: '/Logo',
                    name: 'Logo',
                },
                {
                    path: "/Kleuren",
                    name: "Kleuren",
                },
                {
                    path: '/Typografie',
                    name: 'Typografie',
                },
                {
                    path: '/Elementen',
                    name: 'Elementen',
                },
                {
                    path: '/Iconen',
                    name: 'Iconen',
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
                            <ul v-if="navItem.name === 'Logo'">
                                <li class="nav-title">Logo</li>
                                <div class="nav-sub">
                                    <li class="inspringing">Hoofdlogo</li>
                                    <li class="inspringing">Varianten</li>
                                    <li class="inspringing">Do's</li>
                                    <li class="inspringing">Don'ts</li>
                                </div>
                            </ul>
                            <ul v-else-if="navItem.name === 'Kleuren'">
                                <li class="nav-title">Kleuren</li>
                                <div class="nav-sub">
                                    <li class="inspringing">Merkkleuren</li>
                                    <li class="inspringing">Do's</li>
                                    <li class="inspringing">Don'ts</li>
                                </div>
                            </ul>
                            <ul v-else-if="navItem.name === 'Typografie'">
                                <li class="nav-title">Typografie</li>
                                <div class="nav-sub">
                                    <li class="inspringing">Koppen</li>
                                    <li class="inspringing">Tekst</li>
                                    <li class="inspringing">Do's</li>
                                    <li class="inspringing">Don'ts</li>
                                </div>
                            </ul>
                            <ul v-else-if="navItem.name === 'Elementen'">
                                <li class="nav-title">Elementen</li>
                                <div class="nav-sub">
                                    <li class="inspringing">Do's</li>
                                    <li class="inspringing">Don'ts</li>
                                </div>
                            </ul>
                            <ul v-else-if="navItem.name === 'Iconen'">
                                <li class="nav-title">Iconen</li>
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
                <h1>Logo</h1>
                <h2>Hoofdlogo</h2>
                <div id="container-card">
                    <cardComponent/>
                </div>

                <h2>Varianten</h2>
                <p>Geen card</p>

                <h2>Gebruik</h2>
                <h3>Do's</h3>
                <p>Geen card</p>
                <h3>Don'ts</h3>
                <p>Geen card</p>
            </div>
        </div>
    </div>
</template>


