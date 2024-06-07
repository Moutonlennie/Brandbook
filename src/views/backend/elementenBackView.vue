<template>
    <div>
        <h2>Upload Elementen</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="title_inp">Title:</label>
                <input type="text" id="title_inp" v-model="title" required />
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Foto</label>
                <input type="file" @change="handleFileUpload" accept="image/*" />
                <div v-if="imagePreview" class="mt-3">
                    <img :src="imagePreview" alt="Uploaded Image" class="max-w-xs h-auto mx-auto image-preview" />
                </div>

            </div>
            <button type="submit">Uploaden</button>
        </form>
    </div>


</template>

<script>
import { elementenStore } from '@/stores/elementenStore'
export default {
    data() {
        const store = elementenStore()
        return {
            store,
            title: "",
            image: null,
            imagePreview: null,
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
        submitForm() {

            if (this.image) {
                var title = this.title;

                const reader = new FileReader()

                reader.readAsDataURL(this.image)
                reader.onload = () => {
                    const base64String = reader.result
                    this.store.saveNewElement(
                        title,
                        base64String
                    )

                }
            } else {

                this.store.saveNewElement(
                    title,
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
