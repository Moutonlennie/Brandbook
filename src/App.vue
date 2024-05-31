<template>
  <div id="app">
      <navigatieComponent v-if="showNavAndFooter" />
      <router-view></router-view>
      <footerComponent v-if="showNavAndFooter" />
  </div>
</template>

<script>
import navigatieComponent from './componenten/navigatieComponent.vue';
import footerComponent from './componenten/footerComponent.vue';
export default {
  components: {
    navigatieComponent,
    footerComponent
  },
  watch: {
      $route(to) {
          this.showNavAndFooter = !to.meta.hideNavAndFooter;
      }
  },
  data() {
      return {
          showNavAndFooter: true
      };
  }
};
</script>
