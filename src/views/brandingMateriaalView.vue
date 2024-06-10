<script>
import zijNavComponent from '@/componenten/zijNavComponent.vue'

export default {
    components: {
        zijNavComponent
    },
    data() {
    return {
      navItems: [
        { name: 'Brochures', path: '/branding Materiaal/brochures' },
        { name: 'Visitekaartjes', path: '/branding Materiaal/visitekaartjes' },
        // { name: 'Typografie', path: '/brandbook/typografie' },
        // { name: 'Elementen', path: '/brandbook/elementen' },
        // { name: 'Iconen', path: '/brandbook/iconen' }
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


