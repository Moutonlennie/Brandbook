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
    <div v-for="logo of logos" :key="logo.id">
        <div class="cards">
            <img class="card-img" :src="logo.image">
            <div id="card-text">
                <h1>{{ logo.title }}</h1>
            </div>
            <button class="btn-card">Download</button>
        </div>
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