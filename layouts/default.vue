<template>
    <div>
        <the-header @sidenavToggle="displaySidenav = !displaySidenav"></the-header>
        <the-sidenav :show="displaySidenav" @close="displaySidenav = false"></the-sidenav>

        <nuxt />
    </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue' 



export default {

    components: {
        TheHeader,
        TheSidenav
    },
    data() {
      return {
          displaySidenav : false
      }
  }


}


</script>

<style>
    html {
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        margin: 0;
    }
    
</style>