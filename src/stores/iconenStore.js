import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/iconen'

export const iconenStore = defineStore('iconen', {
state: ()=> ({
iconen: [],
error: null,
}),
actions: {
async fetchIconen() {
    this.error = "";
    this.iconen = [];
    try {
        const response = await axios.get(baseUrl)
        this.iconen = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewIcoon(title, iconenImage) {
    this.error = '';

    let icoon = {title:title, image:iconenImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(icoon),
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
      .then((icoon) => {
          this.iconen.push(icoon);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)