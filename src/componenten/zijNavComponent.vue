<template>
    <nav class="zijNavigatie">
      <ul>
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.path">
            {{ navItem.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      navItems: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  