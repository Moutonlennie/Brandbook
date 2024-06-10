import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/templates'

export const templatesStore = defineStore('templates', {
state: ()=> ({
templates: [],
error: null,

}),
actions: {
async fetchTemplates() {
    this.error = "";
    this.templates = [];
    try {
        const response = await axios.get(baseUrl)
        this.templates = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewTemplate(title, templateImage) {
    this.error = '';

    let template = {title:title, image:templateImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(template),
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
      .then((template) => {
          this.templates.push(template);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)