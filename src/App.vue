<script>
//Importeren van de componenten
import navigatieComponent from './componenten/navigatieComponent.vue';
import footerComponent from './componenten/footerComponent.vue';

export default {
  components: {
    navigatieComponent,
    footerComponent
  },
}
</script>

<template lang="">
  <!-- Componenten gebruiken -->
  <navigatieComponent/>

  <router-view></router-view>

  <footerComponent/>
  
</template>