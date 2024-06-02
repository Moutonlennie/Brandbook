<template>
  <div id="container-card">
    <div class="cards">
      <img class="card-img" :src="imageSrc" :alt="imageAlt">
      <div id="card-text">
        <h1>{{ title }}</h1>
      </div>
      <button class="btn-card" @click="showPopup">Download</button>
    </div>

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
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Card Image'
    }
  },
  data() {
    return {
      isPopupVisible: false
    };
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
      console.log(imageName);
    }
  }
};
</script>

