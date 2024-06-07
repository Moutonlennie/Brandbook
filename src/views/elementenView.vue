<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { elementenStore } from '@/stores/elementenStore';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
    },
    data() {
        const store = elementenStore();
        return {
            isPopupVisible: false,
            store,
            elementen: [],
        }
    },
    computed: {
        elementenFromStore() {
            return this.store.elementen;
        },
    },
    async created() {
        await this.store.fetchElementen();
    },
    watch: {
        elementenFromStore(newValue) {
            if (newValue) {
                this.elementen = newValue;
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
            <h1>Elementen</h1>
            <div v-if="elementen.length > 0">
                        <div v-for="element of elementen" :key="element.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="elementen.title"
                                :imageSrc="element.image"
                              />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addlogo">Voeg een logo toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>