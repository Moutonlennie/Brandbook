import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/visitekaartjes'

export const visitekaartjesStore = defineStore('visitekaartjes', {
state: ()=> ({
visitekaartjes: [],
error: null,

}),
actions: {
async fetchVisitekaartjes() {
    this.error = "";
    this.visitekaartjes = [];
    try {
        const response = await axios.get(baseUrl)
        this.visitekaartjes = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewVisitekaartje(title, visitekaartjeImage) {
    this.error = '';

    let visitekaartje = {title:title, image:visitekaartjeImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(visitekaartje),
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
      .then((visitekaartje) => {
          this.visitekaartjes.push(visitekaartje);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)