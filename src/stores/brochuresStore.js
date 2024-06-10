import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/brochures'

export const brochuresStore = defineStore('brochures', {
state: ()=> ({
brochures: [],
error: null,

}),
actions: {
async fetchBrochures() {
    this.error = "";
    this.brochures = [];
    try {
        const response = await axios.get(baseUrl)
        this.brochures = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewBrochure(title, brochureImage) {
    this.error = '';

    let brochure = {title:title, image:brochureImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(brochure),
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
      .then((brochure) => {
          this.brochures.push(brochure);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)