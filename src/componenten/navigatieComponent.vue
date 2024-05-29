<script>
export default {
    data() {
        return {
            navItems: [
                {
                    path: '/',
                    name: 'Home',
                },
                {
                    path: "/Brandbook",
                    name: "Brandbook",
                },
                {
                    path: '/Branding materiaal',
                    name: 'Branding materiaal',
                },
                {
                    path: '/Foutje ingeslopen',
                    name: 'Foutje ingeslopen',
                }
            ]
        }
        // methods: {
            
        // },
    }
}
</script>

<template>
        <nav class="nav">
        <div>
            <img class="img-logoNav" src="@/assets/logo_icoon.png" alt="logo">
        </div>
        <ul>
            <li class="link" v-for="navItem in navItems" :key="navItem.name" >
                <router-link class="actief" v-bind:to="navItem.path">
                    <button class="btn-primary" v-if="navItem.name === 'Foutje ingeslopen'">Foutje ingeslopen?</button>
                    <span v-else>{{ navItem.name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>



