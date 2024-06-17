<template>
      <div class="cardGebruik">
        <img class="card-img" :src="imageSrc" :alt="imageAlt">
        <div id="card-text">
          <p>{{ description }}</p>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    props: {
      description: {
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
  
  