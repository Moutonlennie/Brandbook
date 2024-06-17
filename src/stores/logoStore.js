import { defineStore } from 'pinia'
import axios from 'axios';

const baseUrl = 'http://localhost:8080/logo'

export const logoStore = defineStore('logos', {
    state: () => ({
        logos: [],
        error: null,
        logo:null,
        pdfStrings: []
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
        async fetchLogoById(id) {
            this.error = '';
            try {
                const response = await axios.get(`${baseUrl}/${id}`);
                this.logo = response.data;
            } catch (error) {
                this.error = error.message;
            }
        },

        async saveNewLogo(title, type, varient, logoImage) {
            this.error = '';

            let logo = { title: title, type: type, varient: varient, image: logoImage }
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
        async deleteLogo(id) {
            this.error = '';
            try {
                const response = await axios.delete(`${baseUrl}/${id}`);
                if (response.status === 204) {
                    this.logos = this.logos.filter(logo => logo.id !== id);
                } else {
                    throw new Error(`Error with status ${response.status}`);
                }
            } catch (error) {
                this.error = error.message;
            }
        },
        async SavePdf(pdf, mapName, PdfName) {
            try {
                // PDF data and name
                const pdfData = pdf; // Replace with actual PDF data
                const pathMapName = mapName; // Replace with desired PDF name
                const pdfName = PdfName; // Replace with desired PDF name

                // Request body
                const requestBody = {
                    pdf: pdfData,
                    name: pdfName,
                    mapName: pathMapName
                };

                // Make POST request using Axios
                const response = await axios.post(baseUrl + "/savePdf", requestBody, {
                    responseType: 'blob', // Set responseType to 'blob' to handle binary data
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status === 200) {
                    this.pdfStrings.push({ name: mapName, pdf: pdf })
                    // Assuming the response contains the saved PDF name or ID
                    return response.data;
                } else {
                    console.error('Error saving file:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching file:', error);
            }

        },
        async getPdf(name) {
            try {
                let modifiedUrl = baseUrl + "/pdf"
                const response = await axios.get(`${modifiedUrl}/${name}`);

                // Check if the response data is an array
                if (Array.isArray(response.data)) {
                    this.pdfStrings = response.data;
                } else {
                    console.error('Error: Response data is not an array');
                }
            } catch (error) {
                console.error('Error fetching PDF:', error);
            }
        },
    },
},
)