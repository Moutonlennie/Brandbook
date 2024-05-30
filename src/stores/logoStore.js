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
        async saveNewLogo(title, type, varient, pdf, mapName, PdfName) {
            this.error = '';
        
            try {
                const pdfData = pdf; // Replace with actual PDF data
                const pathMapName = mapName; // Replace with desired PDF name
                const pdfName = PdfName; // Replace with desired PDF name
                // Prepare the request body
                const requestBody = {
                  title: title,
                  type: type,
                  varient: varient,
                  pdf: pdfData,
                  name: pdfName,
                  mapName: pathMapName
                  
                };
            
                const response = await axios.post(baseUrl, requestBody, {
                    responseType: 'blob', // Set responseType to 'blob' to handle binary data
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            
                this.logos.push(response.data)

                return response.data;
              } catch (error) {
                // Log and handle any errors
                console.error('Error creating logo:', error);
                throw error; // Re-throw the error to be handled by the caller
              }
            }
        },
        
    }
)