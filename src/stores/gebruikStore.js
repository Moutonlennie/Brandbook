import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/gebruik'

export const gebruikStore = defineStore('gebruik', {
state: ()=> ({
gebruik: [],
error: null,

}),
actions: {
async fetchGebruik(type) {
    this.error = "";
    this.gebruik = [];
    try {
        const response = await axios.get(baseUrl + "/" + type)
        this.gebruik = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewGebruik(description, type, juist, gebruikImage) {
    this.error = '';

    let gebruik = {description:description, type:type, juist:juist, image:gebruikImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(gebruik),
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
      .then((gebruik) => {
          this.gebruik.push(gebruik);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)