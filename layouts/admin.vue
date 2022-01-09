<template>
    <div>
        <center>
        <nuxt-link to="/">
        <app-button>Go Home</app-button>
        </nuxt-link>
        </center>
        <nuxt />
    </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton.vue'

export default{

components:{

    AppButton

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