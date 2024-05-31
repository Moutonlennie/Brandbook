<script>
import cardTweeComponent from '@/componenten/cardTweeComponent.vue';
import gebruikComponent from '@/componenten/gebruikComponent.vue';

export default {
    components: {
        cardTweeComponent,
        gebruikComponent
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
            <h1>Iconen</h1>
            <div id="container-card">
              <cardTweeComponent
                title="Iconen Set"
                imageSrc="@/assets/iconen_set.png"
                imageAlt="Iconen Set"
              />
              <!-- Voeg meer kaarten toe indien nodig -->
            </div>
            <br>
            <gebruikComponent/>
          </div>
        </div>
      </div>
    </div>
  </template>