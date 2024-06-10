<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { brochuresStore } from '@/stores/brochuresStore';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
    },
    data() {
        const store = brochuresStore();
        return {
            isPopupVisible: false,
            store,
            brochures: [],
        }
    },
    computed: {
        brochuresFromStore() {
            return this.store.brochures;
        },
    },
    async created() {
        await this.store.fetchBrochures();
    },
    watch: {
        brochuresFromStore(newValue) {
            if (newValue) {
                this.brochures = newValue;
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
            <h1>Brochures</h1>
            <div v-if="brochures.length > 0">
                        <div v-for="brochure of brochures" :key="brochure.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="brochure.title"
                                :imageSrc="brochure.image"
                              />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addbrochures">Voeg een brochure toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>