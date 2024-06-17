<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { visitekaartjesStore } from '@/stores/visitekaartjesStore';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
    },
    data() {
        const store = visitekaartjesStore();
        return {
            isPopupVisible: false,
            store,
            visitekaartjes: [],
        }
    },
    computed: {
        visitekaartjesFromStore() {
            return this.store.visitekaartjes;
        },
    },
    async created() {
        await this.store.fetchVisitekaartjes();
    },
    watch: {
        visitekaartjesFromStore(newValue) {
            if (newValue) {
                this.visitekaartjes = newValue;
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
                        <h1>Visitekaartjes</h1>
                        <div id="search">
                            <p>Search</p>
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
            <div v-if="visitekaartjes.length > 0">
                        <div v-for="visitekaartje of visitekaartjes" :key="visitekaartje.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="visitekaartje.title"
                                :imageSrc="visitekaartje.image"
                              />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addvisitekaartjes">Voeg een visitekaartje toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>