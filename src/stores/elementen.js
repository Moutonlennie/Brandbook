import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/Elementen'

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
        }
    }
})