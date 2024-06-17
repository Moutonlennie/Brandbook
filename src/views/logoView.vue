<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
        </div>
        <div class="page">
            <div id="brandbook-right">
                <div id="logo">
                    <div id="logo-titel">
                        <h1>Logo</h1>
                        <div id="search">
                            <p>Search</p>
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                    <h2 id="hoofdlogo">Hoofdlogo</h2>
                    
                    <div id="container-card">
                        <div v-if="hoofdLogos.length > 0">
                            <div v-for="logo of hoofdLogos" :key="logo.id">
                                <cardComponent :logo="logo" />
                            </div>
                        </div>
                        <cardToevoegenComponent @click="navigateToAddLogo"/>
                </div>
                    <br>
                    <h2 id="varianten">Varianten</h2>
                    <div id="container-card">
                        <div v-if="varientLogos.length > 0">
                            <div v-for="logo of varientLogos" :key="logo.id">
                                <cardComponent :logo="logo" />
                            </div>
                        </div>
                        <cardToevoegenComponent @click="navigateToAddLogo"/>
                    </div>
                    <gebruikComponent :welGebruik="welGebruik" :nietGebruik="nietGebruik"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardComponent from '@/componenten/cardComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import cardToevoegenComponent from '@/componenten/cardToevoegenComponent.vue';
import cardGebruik from '@/componenten/cardGebruik.vue';
import { logoStore } from '@/stores/logoStore';
import { gebruikStore } from '@/stores/gebruikStore';

export default {
    components: {
        cardComponent,
        gebruikComponent,
        cardToevoegenComponent,
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
            gebruik: [],
            isAdmin: false
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
    },
    methods: {
    navigateToAddLogo() {
      this.$router.push('/addlogo');
    },
    navigateTo(route) {
        this.$router.push({ path: `/${route}` });
        },
        checkUserRole() {
            const userData = localStorage.getItem('user');
            if (userData) {
                const userObject = JSON.parse(userData);
                this.isAdmin = userObject.role === 'admin';
            }
        }
  },
  mounted() {
        this.checkUserRole();
    }
}
</script>
