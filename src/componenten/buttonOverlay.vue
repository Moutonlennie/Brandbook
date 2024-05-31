<script>
export default {
    data() {
      return {
        isPopupVisible: false
      };
    },
    methods: {
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
    <div v-if="isPopupVisible" class="popup-overlay">
        <div class="popup-content">
          <h2>Digitaal</h2>
          <button class="btn-sec" @click="downloadImage('digital1.jpg')">PNG <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital2.jpg')">EPS <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">SVG <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">JPEG <i class="bi bi-download"></i></button>
          
          <br><br>
          <h2>Print</h2>
          <button class="btn-sec" @click="downloadImage('digital1.jpg')">PNG <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital2.jpg')">EPS <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">SVG <i class="bi bi-download"></i></button>
          <button class="btn-sec" @click="downloadImage('digital3.jpg')">JPEG <i class="bi bi-download"></i></button>
  
          <br>
          <button class="btn-card" @click="hidePopup">Sluiten</button>
        </div>
    </div>
</template>

