<template>
    <div>
        <h2>Upload Logo</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="title" required />
            </div>
            <div>
                <label for="type">Type:</label>
                <select id="type" v-model="type" required>
                    <option value="">Select Type</option>
                    <option value="LOGO">Logo</option>
                    <option value="ICON">Icon</option>
                </select>
            </div>
            <div>
                <label for="varient">variant:</label>
                <select id="varient" v-model="varient" required>
                    <option value="">Select Type</option>
                    <option value="True">Is een variant</option>
                    <option value="False">Geen variant</option>
                </select>
            </div>
            <div>
                <label for="fileInput">Upload File:</label>
                <input type="file" id="fileInput" @change="handleFileChange" accept=".jpg, .jpeg, .png, .gif"
                    required />
            </div>
            <button type="submit">Uploaden</button>
        </form>
    </div>
</template>

<script>
import { logoStore } from '@/stores/logoStore'
export default {
    data() {
        const store = logoStore()
        return {
            store,
            title: "",
            type: "",
            varient: "",
            navItems: [
                {
                    path: '/Logo',
                    name: 'Logo',
                },
                {
                    path: "/Kleuren",
                    name: "Kleuren",
                },
                {
                    path: '/Typografie',
                    name: 'Typografie',
                },
                {
                    path: '/Elementen',
                    name: 'Elementen',
                },
                {
                    path: '/Iconen',
                    name: 'Iconen',
                }
            ]
        }
    },

    methods: {
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        handleSubmit() {
    
            const fileInput = document.getElementById('fileInput')
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
                this.store.saveNewLogo(this.title, this.type, this.varient, pdfContent, this.PathName, this.type)
                // Clear input fields after successful upload
                this.pdfName = ''
                fileInput.value = ''
            }
            reader.readAsDataURL(file)
        },



    }
}
</script>

<style scoped>
.image-preview {
    border: 2px solid #ccc;
    padding: 10px;
}
</style>

