<template>
    <div>
        <h1 class="title">Upload Gebruik</h1>
        <div id="formulier-container">
        <form @submit.prevent="submitForm">
            <div>
                <label for="description_inp">Beschrijving:</label><br>
                <textarea type="text" id="description_inp" v-model="description" rows="8" cols="35" required />
            </div>
            <div>
                <label for="pagina">Kies je pagina:</label>
                <select v-model="type" name="pagina" id="pagina">
                    <option value="logo">Logo</option>
                    <option value="kleuren">Kleuren</option>
                    <option value="elementen">Elementen</option>
                    <option value="typografie">Typografie</option>
                    <option value="visitekaartjes">Visitekaartjes</option>
                    <option value="brochures">Brochures</option>
                    <option value="iconen">Iconen</option>
                    <option value="templates">Templates</option>
                </select>
            </div>
            <div>
                <label for="doDonts">Kies je pagina:</label>
                <select v-model="juist" name="doDonts" id="doDonts">
                    <option value="true">Do</option>
                    <option value="false">Don'ts</option>
                </select>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Foto</label>
                <input type="file" @change="handleFileUpload" accept="image/*" />
                <div v-if="imagePreview" class="mt-3">
                    <img :src="imagePreview" alt="Uploaded Image" class="max-w-xs h-auto mx-auto image-preview" />
                </div>

            </div>
            <button class="btn-card" type="submit">Uploaden</button>
        </form>
    </div>
    </div>
</template>

<script>
import { gebruikStore } from '@/stores/gebruikStore'
export default {
    data() {
        const store = gebruikStore()
        return {
            store,
            description: "",
            type: "",
            juist: "",
            image: null,
            imagePreview: null
        }
    },
    methods: {
        submitForm() {

            if (this.image) {
                var description = this.description;
                var type = this.type;
                var juist = this.juist;

                const reader = new FileReader()

                reader.readAsDataURL(this.image)
                reader.onload = () => {
                    const base64String = reader.result
                    this.store.saveNewGebruik(
                        description,
                        type,
                        juist,
                        base64String
                    )

                }
            } else {

                this.store.saveNewGebruik(
                    description,
                    type,
                    juist,
                    null
                )


            }
            this.clearForm()
        },
        handleFileUpload(event) {
            const file = event.target.files[0]
            this.image = file

            // Create a FileReader instance
            const reader = new FileReader()

            // Read the file as a data URL
            reader.readAsDataURL(file)

            // Once the file is loaded, set the imagePreview to the result
            reader.onload = () => {
                this.imagePreview = reader.result
            }

        },
        clearForm() {
            this.description = ""
            this.type = ""
            this.juist = ""
            this.image = null
            this.imagePreview = null
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
