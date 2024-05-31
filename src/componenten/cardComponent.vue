<script>
import { logoStore } from '@/stores/logoStore';
export default {
    data() {
        const store = logoStore();
        return {
            isPopupVisible: false,
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
    },
    methods: {
      showPopup() {
        this.isPopupVisible = true;
      },
      hidePopup() {
        this.isPopupVisible = false;
      },
      downloadImage(imageName) {
        const link = document.createElement('a');
        link.href = require(`@/assets/${imageName}`);
        link.download = imageName;
        link.click();
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
            <button class="btn-card" @click="showPopup">Download</button>
        </div>
        <div v-if="isPopupVisible" class="popup-overlay">
        <div class="popup-content">
          <h2>Digitaal</h2>
          <button class="btn-sec" @click="downloadImage('digital1.jpg')">PNG</button>
          <button class="btn-sec" @click="downloadImage('digital2.jpg')">EPS</button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">SVG</button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">JPEG</button>
          
          <br><br>
          <h2>Print</h2>
          <button class="btn-sec" @click="downloadImage('digital1.jpg')">PNG</button>
          <button class="btn-sec" @click="downloadImage('digital2.jpg')">EPS</button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">SVG</button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">JPEG</button>
  
          <br>
          <button class="btn-card" @click="hidePopup">Sluiten</button>
        </div>
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