<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';

export default {
    components: {
        gebruikComponent,
        cardTweeComponent
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
            <div id="container-card">
              <cardTweeComponent
                title="Mannetjes samen"
                imageSrc="@/assets/elementen.png"
                imageAlt="Mannentjes samen"
              />
            </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>