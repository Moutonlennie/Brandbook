<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
        </div>
        <div class="page">
            <div id="brandbook-right">
                <!-- Conditional Sub-navigation -->
                <nav v-if="$route.name === 'Logo'">
                    <router-link :to="{ hash: '#hoofdlogo' }">Hoofdlogo</router-link>
                    <router-link :to="{ hash: '#varianten' }">Varianten</router-link>
                    <router-link :to="{ hash: '#gebruik' }">Gebruik</router-link>
                </nav>
                <div id="logo">
                    <h1>Logo</h1>
                    <h2 id="hoofdlogo">Hoofdlogo</h2>
                    <div v-if="hoofdLogos.length > 0">
                        <div v-for="logo of hoofdLogos" :key="logo.id">
                            <div id="container-card">
                                <cardComponent :logo="logo" />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addlogo">Voeg een logo toe</a></p>
                    </div>
                    <br>
                    <h2 id="varianten">Varianten</h2>
                    <div v-if="varientLogos.length > 0">
                        <div v-for="logo of varientLogos" :key="logo.id">
                            <div id="container-card">
                                <cardComponent :logo="logo" />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addlogo">Voeg een logo toe</a></p>
                    </div>
                    <br>
                    <h2 id="gebruik">Gebruik</h2>
                    <div id="gebruik">
                        <i class="bi bi-check"></i>
                        <h3>Do's</h3>
                    </div>
                    <div v-if="welGebruik.length > 0">
                        <div v-for="toepassing of welGebruik" :key="toepassing.id">
                            <div id="container-card">
                                <cardGebruik  :description="toepassing.description" :imageSrc="toepassing.image"/>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addgebruik">Voeg gebruik toe</a></p>
                    </div>
                    <div id="gebruik">
                        <i class="bi bi-x"></i>
                        <h3>Don'ts</h3>
                    </div>
                    <div v-if="nietGebruik.length > 0">
                        <div v-for="toepassing of nietGebruik" :key="toepassing.id">
                            <div id="container-card">
                                <cardGebruik  :description="toepassing.description" :imageSrc="toepassing.image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardComponent from '@/componenten/cardComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import cardGebruik from '@/componenten/cardGebruik.vue';
import { logoStore } from '@/stores/logoStore';
import { gebruikStore } from '@/stores/gebruikStore';

export default {
    components: {
        cardComponent,
        gebruikComponent,
        cardGebruik
    },

    data() {
        const store = logoStore();
        const storeGebruik = gebruikStore();
        return {
            isPopupVisible: false,
            store,
            storeGebruik,
            logos: [],
            hoofdLogos: [],
            varientLogos: [],
            welGebruik: [],
            nietGebruik: [],
            gebruik: []
        }
    },
    computed: {
        logosFromStore() {
            return this.store.logos;
        },
        filteredHoofdLogos() {
            return this.logos.filter(l => l.varient === false);
        },
        filteredVarientLogos() {
            return this.logos.filter(l => l.varient === true);
        },
        gebruikFromStore() {
            return this.storeGebruik.gebruik;
        },
        filteredWelGebruik() {
            return this.gebruik.filter(l => l.juist === true);
        },
        filteredNietGebruik() {
            return this.gebruik.filter(l => l.juist === false);
        },
    },
    async created() {
        await this.store.fetchLogos();
        await this.storeGebruik.fetchGebruik("logo");
    },
    watch: {
        logosFromStore(newValue) {
            if (newValue) {
                this.logos = newValue;
                this.hoofdLogos = this.filteredHoofdLogos;
                this.varientLogos = this.filteredVarientLogos;
            }
        },
        gebruikFromStore(newValue) {
            if (newValue) {
                this.gebruik = newValue;
                this.welGebruik = this.filteredWelGebruik;
                this.nietGebruik = this.filteredNietGebruik;
                console.log(this.welGebruik);
            }
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

nav a {
    text-decoration: none;
    color: blue;
    margin: 5px 0;
}

#brandbook-container {
    display: flex;
}

#brandbook-left {
    width: 200px; /* Adjust as necessary */
}

.page {
    flex: 1;
}

#container-card {
    margin: 10px 0;
}
</style>
