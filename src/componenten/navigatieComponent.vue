<script>
export default {
    data() {
        return {
            navItems: [
                {
                    path: '/home',
                    name: 'Home',
                },
                {
                    path: "/Brandbook",
                    name: "Brandbook",
                },
                {
                    path: "/brandingMateriaal",
                    name: 'Branding materiaal',
                },
                {
                    path: '/FoutjeIngeslopen',
                    name: 'Foutje ingeslopen',
                }
            ]
        }
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



