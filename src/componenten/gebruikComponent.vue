<template>
    <h2>Gebruik</h2>
    <div id="gebruik">
      <i class="bi bi-check"></i>
      <h3 class="do">Do's</h3>
      <div v-if="welGebruik.length > 0" class="flexItem">
        <div v-for="toepassing of welGebruik" :key="toepassing.id">
          <div id="container-card">
            <cardGebruik :description="toepassing.description" :imageSrc="toepassing.image"/>
          </div>
        </div>
      </div>
      <cardToevoegenComponent @click="navigateToAddGebruik"/>
      <div id="donts">
        <i class="bi bi-x"></i>
        <h3>Don'ts</h3>
      </div>
      <div v-if="nietGebruik.length > 0">
        <div v-for="toepassing of nietGebruik" :key="toepassing.id">
          <div id="container-card">
            <cardGebruik :description="toepassing.description" :imageSrc="toepassing.image"/>
          </div>
        </div>
      </div>
      <cardToevoegenComponent @click="navigateToAddGebruik"/>    
    </div>
  </template>
  
  <script>
  import cardToevoegenComponent from './cardToevoegenComponent.vue';
  import cardGebruik from '@/componenten/cardGebruik.vue';
  import { gebruikStore } from '@/stores/gebruikStore';
  import cardComponent from '@/componenten/cardComponent.vue';

  export default {
    components: {
      cardToevoegenComponent,
      cardComponent,
      cardGebruik
    },
    data() {
      const storeGebruik = gebruikStore();
      return {
        storeGebruik,
        welGebruik: [],
        nietGebruik: [],
        gebruik: []
      }
    },
  
    props: {
      welGebruik: {
        type: Array,
        default: () => []
      },
      nietGebruik: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      navigateToAddGebruik() {
        this.$router.push('/addgebruik');
      }
    },
    computed: {
    gebruikFromStore() {
        return this.storeGebruik.gebruik;
      },
    filteredWelGebruik() {
        return this.gebruik.filter(l => l.juist === true);
      },
    filteredNietGebruik() {
        return this.gebruik.filter(l => l.juist === false);
      },
    },
    async created() {
      await this.storeGebruik.fetchGebruik("logo");
    },
    watch: {
      gebruikFromStore(newValue) {
        if (newValue) {
          this.gebruik = newValue;
          this.welGebruik = this.filteredWelGebruik;
          this.nietGebruik = this.filteredNietGebruik;
          console.log(this.welGebruik);
        }
      }
    },
    
  };
  </script>
  