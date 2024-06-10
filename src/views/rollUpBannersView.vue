<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';
import { rollUpBannersStore } from '@/stores/rollUpBannersStore';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
    },
    data() {
        const store = rollUpBannersStore();
        return {
            isPopupVisible: false,
            store,
            rollUpBanners: [],
        }
    },
    computed: {
        rollUpBannersFromStore() {
            return this.store.rollUpBanners;
        },
    },
    async created() {
        await this.store.fetchRollUpBanners();
    },
    watch: {
        rollUpBannersFromStore(newValue) {
            if (newValue) {
                this.rollUpBanners = newValue;
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
            <h1>Roll-up banners</h1>
            <div v-if="rollUpBanners.length > 0">
                        <div v-for="rollUpBanner of rollUpBanners" :key="rollUpBanner.id">
                            <div id="container-card">
                              <cardTweeComponent
                                :title="rollUpBanner.title"
                                :imageSrc="rollUpBanner.image"
                              />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Geen card gevonden. <a href="http://localhost:5173/addrollUpBanners">Voeg een Roll-up banner toe</a></p>
                    </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>