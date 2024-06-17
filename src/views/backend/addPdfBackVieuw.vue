<template>
<div v-if="logo">
            <h1 class="h3 inline-block mt-4">{{ logo.title }}</h1>

            <div class="flex items-center justify-center w-full">
 

                    <input type="file" class="form-control hidden" id="pdfFile" accept=".pdf,.png,.jpg"
                        @change="handleFileUpload" />
            </div>

            <div v-if="pdfStrings.length > 0" class="mt-3 border p-3 rounded">
                <div v-for="(pdf, index) in pdfStrings" :key="index" class="files">
                    <ul class="flex items-center">
                        <li class="flex-grow" id="pdfName">
                            <h3 class="text-2xl truncate">{{ pdf.name }}</h3>
                        </li>
                        <li class="icons text-2xl">
                            <a :href="convertBase64ToBlobUrl(pdf.pdf)" :download="pdf.name">
                                <p>download</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'

import { logoStore } from '@/stores/logoStore'


export default defineComponent({

    data() {
        const store = logoStore()
        return {
            store,
            logo: null,
            pdfStrings: []
        }
    },

    computed: {
        logoFromStore() {
            return this.store.logo
        },

    },
    async created() {
        this.id = useRoute().params.id
        await this.store.fetchLogoById(this.id)
        await this.store.getPdf(this.logo.id + '_' + this.logo.title)
        this.pdfStrings = this.store.pdfStrings

    },
    async mounted() {
        //reload foals
        await this.store.fetchLogoById(this.id)
    },
    watch: {
        logoFromStore(newValue) {
            if (newValue) {
                this.logo = newValue
            }
        },
        pdfStringsFromStore(newValue) {
            if (newValue) {
                this.pdfStrings = newValue
            }
        },
    },
    methods: {

        handleFileUpload() {
            const fileInput = document.getElementById('pdfFile')
            const file = fileInput.files[0]
            if (!file) {
                alert('Please select a PDF file.')
                return
            }

            this.PathName = file.name

            const reader = new FileReader()
            reader.onload = () => {
                const pdfContent = reader.result // This will be a base64-encoded string of the PDF content
                // Now you can do something with the PDF content, such as sending it to the server

                this.store.SavePdf(pdfContent, this.PathName, this.logo.id + '_' + this.logo.title)
                // Clear input fields after successful upload
                this.pdfName = ''
                fileInput.value = ''
            }
            reader.readAsDataURL(file)
        },
        convertBase64ToBlobUrl(base64) {
            try {
                // Check if the base64 string has a prefix and remove it if necessary
                if (base64.includes('base64,')) {
                    base64 = base64.split('base64,')[1]
                }

                const byteCharacters = atob(base64)
                const byteNumbers = new Array(byteCharacters.length)
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i)
                }
                const byteArray = new Uint8Array(byteNumbers)
                const blob = new Blob([byteArray], { type: 'application/pdf' })
                return URL.createObjectURL(blob)
            } catch (error) {
                console.error('Error converting base64 to Blob:', error)
                return null
            }
        }
    }
})
</script>