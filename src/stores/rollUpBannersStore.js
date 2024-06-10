import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/rollUpBanner'

export const rollUpBannersStore = defineStore('rollUpBanners', {
state: ()=> ({
rollUpBanners: [],
error: null,

}),
actions: {
async fetchRollUpBanners() {
    this.error = "";
    this.rollUpBanners = [];
    try {
        const response = await axios.get(baseUrl)
        this.rollUpBanners = response.data

    } catch (error) {
        this.error = error.message
    }
},
async saveNewRollUpBanner(title, rollUpBannerImage) {
    this.error = '';

    let rollUpBanner = {title:title, image:rollUpBannerImage}
    fetch(baseUrl,
      {
          method: "POST",
          body: JSON.stringify(rollUpBanner),
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
      .then((rollUpBanner) => {
          this.rollUpBanners.push(rollUpBanner);
      })
      .catch((error) => {
          this.error = error;
      });
},
},

}
)