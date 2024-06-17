<script>
import { logoStore } from '@/stores/logoStore';
export default {
  data() {
    const store = logoStore();
    return {
      isPopupVisible: false,
      showTrashIcon: false,
      store,
      logos: [],
    }
  },
  props: {
    logo: {
      type: Object,
      required: true
    }
  },
  async created() {
    await this.store.getPdf(this.logo.id + '_' + this.logo.title)
    this.pdfStrings = this.store.pdfStrings

  },
  watch: {
    pdfStringsFromStore(newValue) {
      if (newValue) {
        this.pdfStrings = newValue
      }
    },
  },

  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    },
    downloadImage(base64Image) {
      // Haal de MIME-type van de base64 string op
      const mimeType = base64Image.match(/data:(.*);base64,/)[1];

      // Decodeer de base64 string
      const byteString = atob(base64Image.split(',')[1]);

      // Converteer naar een array van bytes
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // Maak een Blob van de byte array
      const blob = new Blob([ab], { type: mimeType });

      // Maak een tijdelijke link voor de download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'image.png'; // de naam van het gedownloade bestand

      // Simuleer een klik op de link om de download te starten
      document.body.appendChild(link);
      link.click();

      // Verwijder de link na de download
      document.body.removeChild(link);
    },
    deleteCard() {
      // Verwijder de kaart uit de lijst of store
      // Hier moet je logica toevoegen om de kaart te verwijderen
      // Bijvoorbeeld:
      this.store.deleteLogo(this.logo.id); // Verwijder de kaart uit de store
    },
    convertBase64ToBlobUrl(base64) {
      try {
        // Check if the base64 string has a prefix and remove it if necessary
        if (base64.includes('base64,')) {
          base64 = base64.split('base64,')[1]
        }

        const byteCharacters = atob(base64)
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'application/pdf' })
        return URL.createObjectURL(blob)
      } catch (error) {
        console.error('Error converting base64 to Blob:', error)
        return null
      }
    },
    getFileExtension(filename) {
      if (filename.startsWith('.')) return ''; // Hidden file or no extension
      const index = filename.lastIndexOf('.');
      return index > 0 ? filename.substring(index + 1) : '';
    }
  }
}
</script>

<template>
  <div class="cards" @mouseover="showTrashIcon = true" @mouseleave="showTrashIcon = false">
    <img class="card-img" :src="logo.image">
    <div id="card-text">
      <h1>{{ logo.title }}</h1>
    </div>
    <button class="btn-card" @click="showPopup">Download</button>
    <i v-if="showTrashIcon" class="bi bi-trash-fill" @click="deleteCard"></i>
  </div>
  <div v-if="isPopupVisible" class="popup-overlay">
    <div class="popup-content">
      <h2>Digitaal</h2>
      <button class="btn-sec" @click="downloadImage(logo.image)">PNG</button>
      <div v-if="pdfStrings.length > 0" class="mt-3 border p-3 rounded">
        <div v-for="(pdf, index) in pdfStrings" :key="index" class="files">
          <a :href="convertBase64ToBlobUrl(pdf.pdf)" :download="pdf.name">
            <button class="btn-sec">{{ getFileExtension(pdf.name) }}</button>
          </a>
        </div>
      </div>

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
</template>