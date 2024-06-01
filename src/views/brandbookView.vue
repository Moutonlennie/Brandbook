<script>
import zijNavComponent from '@/componenten/zijNavComponent.vue'

export default {
    components: {
        zijNavComponent
    },
    data() {
    return {
      navItems: [
        { name: 'Logo', path: '/brandbook/logo' },
        { name: 'Kleuren', path: '/brandbook/kleuren' },
        { name: 'Typografie', path: '/brandbook/typografie' },
        { name: 'Elementen', path: '/brandbook/elementen' },
        { name: 'Iconen', path: '/brandbook/iconen' }
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


