import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/logo'

export const logoStore = defineStore('logos', {
state: ()=> ({
logos: [],
error: null,

}),
actions: {
async fetchLogos() {
    this.error = "";
    this.logos = [];
    try {
        const response = await axios.get(baseUrl)
        this.logos = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewLogo(title, type, varient, logoImage) {
    this.error = '';

    let logo = {title:title, type:type, varient:varient, image:logoImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(logo),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw `error with status ${response.status}`;
          }
      })
      .then((logo) => {
          this.logo.push(logo);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)