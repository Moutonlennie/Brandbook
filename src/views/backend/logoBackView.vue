<template>
    <div>
        <h1 class="title">Upload Logo</h1>
        <div id="formulier-container">
            <form @submit.prevent="submitForm">
                <label for="title_inp">Titel:</label><br>
                <input type="text" id="title_inp" v-model="title" required />
                <div id="type">
                    <label for="type">Type:</label><br>
                    <select id="type" v-model="type" required>
                        <option value="">Selecteer type</option>
                        <option value="LOGO">Logo</option>
                        <option value="ICON">Icon</option>
                    </select>
                </div>
                <div id="variant">
                    <label for="varient">Variant:</label><br>
                    <select id="varient" v-model="varient" required>
                        <option value="">Selecteer variant</option>
                        <option value="True">Variant</option>
                        <option value="False">Geen variant</option>
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
        <div v-if="logos.length > 0">
            <div v-for="logo of logos" :key="logo.id">
                <RouterLink :to="'/edit/' + logo.id">
                    
                </RouterLink>

            </div>
        </div>
        <div v-else>
            <p></p>
        </div>
    </div>


</template>

<script>
import { logoStore } from '@/stores/logoStore'
export default {
    data() {
        const store = logoStore()
        return {
            store,
            logos: [],
            title: "",
            type: "",
            varient: "",
            image: null,
            imagePreview: null
        }
    },
    computed: {
        logosFromStore() {
            return this.store.logos;
        },
    },
    async created() {
        await this.store.fetchLogos();
    },
    watch: {
        logosFromStore(newValue) {
            if (newValue) {
                this.logos = newValue;
                this.hoofdLogos = this.filteredHoofdLogos;
                this.varientLogos = this.filteredVarientLogos;
            }
        },
    },
    methods: {
        submitForm() {

            if (this.image) {
                var title = this.title;
                var type = this.type;
                var varient = this.varient;

                const reader = new FileReader()

                reader.readAsDataURL(this.image)
                reader.onload = () => {
                    const base64String = reader.result
                    this.store.saveNewLogo(
                        title,
                        type,
                        varient,
                        base64String
                    )

                }
            } else {

                this.store.saveNewLogo(
                    title,
                    type,
                    varient,
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
            this.title = ""
            this.type = ""
            this.varient = ""
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
