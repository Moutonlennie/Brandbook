import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/elementen'

export const elementenStore = defineStore('elementen', {
state: ()=> ({
elementen: [],
error: null,

}),
actions: {
async fetchElementen() {
    this.error = "";
    this.elementen = [];
    try {
        const response = await axios.get(baseUrl)
        this.elementen = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewElement(title, elementImage) {
    this.error = '';

    let element = {title:title, image:elementImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(element),
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
      .then((element) => {
          this.elementen.push(element);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)