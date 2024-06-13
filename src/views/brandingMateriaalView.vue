<script>
import zijNavComponent from '@/componenten/zijNavComponent.vue'

export default {
    components: {
        zijNavComponent
    },
    data() {
    return {
      navItems: [
        { name: 'Brochures', path: '/brandingMateriaal/brochures' },
        { name: 'Visitekaartjes', path: '/brandingMateriaal/visitekaartjes' },
        { name: 'RollUpBanner', path: '/brandingMateriaal/rollUpBanners' },
        { name: 'Templates', path: '/brandingMateriaal/templates' }
      ]
    }
  }
}
</script>

<template>
    <div id="brandbook-container">
        <div id="brandbook-left">
            <zijNavComponent :navItems="navItems"/>
        </div>
        
    </div>
    <router-view></router-view>
</template>


