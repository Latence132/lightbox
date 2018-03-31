<style src="./lightbox.scss" lang="scss"></style>
<template>
    <div class="lightbox">
      <img :src="image" alt="">
    </div>
</template>




<script>
    
    import './LightboxDirective';
    import store from './LightboxStore';
    
    export default {
        data () {
            return {
                state: store.state
            }
        },
        computed:{
            image () { return this.state.images[this.state.index]}
        }

    }
</script>


