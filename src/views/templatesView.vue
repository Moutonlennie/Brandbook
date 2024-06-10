<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { templatesStore } from '@/stores/templatesStore';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
    },
    data() {
        const store = templatesStore();
        return {
            isPopupVisible: false,
            store,
            templates: [],
        }
    },
    computed: {
        templatesFromStore() {
            return this.store.templates;
        },
    },
    async created() {
        await this.store.fetchTemplates();
    },
    watch: {
        templatesFromStore(newValue) {
            if (newValue) {
                this.templates = newValue;
            }
        }
    },
}
</script>

<template>
    <div id="brandbook-container">
      <div id="brandbook-left">
        <zijNavComponent :navItems="navItems"/>
      </div>
      <div class="page">
        <div id="brandbook-right">
          <div id="logo">
            <h1>Templates</h1>
            <div v-if="templates.length > 0">
                        <div v-for="template of templates" :key="template.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="template.title"
                                :imageSrc="template.image"
                              />
                            </div>
                        </div>
                </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addtemplates">Voeg een template toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>