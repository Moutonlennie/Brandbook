<script>
export default {
  data() {
    return {
      form: {
        fname: '',
        email: '',
        file: null,
        comments: ''
      },
      errors: {},
      successMessage: '',
      fileName: ''
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.fname) {
        this.errors.fname = 'Volledige naam is verplicht';
      }
      if (!this.form.email) {
        this.errors.email = 'Email is verplicht';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'Ongeldig emailadres';
      }
      if (!this.form.file) {
        this.errors.file = 'Bestand uploaden is verplicht';
      }
      if (!this.form.comments) {
        this.errors.comments = 'Opmerkingen zijn verplicht';
      }

      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    verzenden() {
      if (this.validateForm()) {
        this.successMessage = 'Bedankt voor uw bericht. Wij hebben uw mail goed ontvangen.';
      }
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
      this.fileName = this.form.file ? this.form.file.name : '';
    },
    removePlaceholder(field) {
      this.form[field] = '';
    }
  }
};
</script>

<template>
  <div id="form">
    <h1>Foutje ingeslopen?</h1>
    <form @submit.prevent="verzenden">
      <label for="fname">Volledige naam:</label><br>
      <input type="text" id="fname" v-model="form.fname" :class="{'error': errors.fname}" @focus="removePlaceholder('fname')" placeholder="Vul u voornaam + u achternaam in">
      <div v-if="errors.fname" class="error-message">{{ errors.fname }}</div><br>

      <label for="email">Email:</label><br>
      <input type="text" id="email" v-model="form.email" :class="{'error': errors.email}" @focus="removePlaceholder('email')" placeholder="Vul u e-mail adres in">
      <div v-if="errors.email" class="error-message">{{ errors.email }}</div><br>

      <label for="upload">Bestand uploaden:</label><br>
      <div id="uploadFile">
        <label class="custom-fileInput" for="upload">Upload file</label>
        <i class="bi bi-upload"></i>
        <input class="fileInput" type="file" id="upload" @change="handleFileUpload" :class="{'error': errors.file}"><br>
        <div v-if="errors.file" class="error-message">{{ errors.file }}</div>
      </div>
      <div v-if="fileName" class="file-name">Bestandsnaam: {{ fileName }}</div><br>

      <label for="comments">Opmerkingen:</label><br>
      <textarea id="comments" v-model="form.comments" :class="{'error': errors.comments}" rows="6" cols="60" @focus="removePlaceholder('email')" placeholder="Een foutje ontdekt? Laat het hier weten"></textarea>
      <div v-if="errors.comments" class="error-message">{{ errors.comments }}</div><br>

      <a href="#" class="privacy">Privacy policy</a><br>

      <button class="btn-card" type="submit">Verzenden</button>
    </form>

    <div v-if="successMessage" class="success-popup">
      {{ successMessage }}
    </div>
  </div>
</template>
