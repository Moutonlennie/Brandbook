<script>
import zijNavComponent from '@/componenten/zijNavComponent.vue'

export default {
    components: {
        zijNavComponent
    },
    data() {
    return {
      navItems: [
        { name: 'logo', path: '/brandbook/logo' },
        { name: 'kleuren', path: '/brandbook/kleuren' },
        { name: 'typografie', path: '/brandbook/typografie' },
        { name: 'elementen', path: '/brandbook/elementen' },
        { name: 'iconen', path: '/brandbook/iconen' }
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


