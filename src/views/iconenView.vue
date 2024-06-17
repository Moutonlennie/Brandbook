<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { iconenStore } from '@/stores/iconenStore';

export default {
    components: {
        cardTweeComponent,
        gebruikComponent
    },
    data() {
        const store = iconenStore();
        return {
            isPopupVisible: false,
            store,
            iconen: [],
        }
    },
    computed: {
        iconenFromStore() {
            return this.store.iconen;
        },
    },
    async created() {
        await this.store.fetchIconen();
    },
    watch: {
        iconenFromStore(newValue) {
            if (newValue) {
                this.iconen = newValue;
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
            <div id="logo-titel">
                        <h1>Iconen</h1>
                        <div id="search">
                            <p>Search</p>
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
            <div v-if="iconen.length > 0">
                        <div v-for="icoon of iconen" :key="icoon.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="icoon.title"
                                :imageSrc="icoon.image"
                              />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addiconen">Voeg een logo toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>