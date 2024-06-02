<script>
import cardComponent from '@/componenten/cardComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { logoStore } from '@/stores/logoStore';
export default {
    components: {
        cardComponent,
        gebruikComponent
    },

    data() {
        const store = logoStore();
        return {
            isPopupVisible: false,
            store,
            logos: [],
            hoofdLogos: [],
            varientLogos: [],
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
    },
    async created() {
        await this.store.fetchLogos();
    },
    watch: {
        logosFromStore(newValue) {
            if (newValue) {
                this.logos = newValue;
                this.hoofdLogos = this.filteredHoofdLogos;
                this.varientLogos = this.filteredVarientLogos // Update hoofdLogos whenever logos are updated
                console.log(this.logos);
            }
        }
    },
}
</script>

<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
        </div>
        <div class="page">
            <div id="brandbook-right">
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
                    <gebruikComponent />
                </div>
            </div>
        </div>
    </div>
</template>