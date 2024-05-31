<script>
import { logoStore } from '@/stores/logoStore';
export default {
    data() {
        const store = logoStore();
        return {
            store,
            logos: [],
        }
    },
    computed: {
        logosFromStore() {
           return this.store.logos

        }
    },
    async created() {
        await this.store.fetchLogos()

    },
    watch: {
        logosFromStore(newValue) {
            if(newValue){
                this.logos = newValue
                console.log(this.logos)
            }
        }
    }
}
</script>

<template>
<div v-if="logos.length > 0">
    <div v-for="logo of logos" :key="logo.id">
        <div class="cards">
            <img class="card-img" :src="logo.image">
            <div id="card-text">
                <h1>{{ logo.title }}</h1>
            </div>
            <button class="btn-card">Download</button>
        </div>
    </div>
</div>
<div v-else>
    <p>Geen card gevonden. <a href="http://localhost:5173/addlogo">Voeg een logo toe</a></p>
</div>
    <!-- <div id="container-card">
        <div class="cards">
            <img class="card-img" src="@/assets/logo_pmo.png" alt="logo pmo">
            <div id="card-text">
                <h1>Logo</h1>
            </div>
            <button class="btn-card">Download</button>
        </div>
    </div> -->
</template>