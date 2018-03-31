<template>
  <div id="app">
       <a :href="'http://lorempicsum.com/futurama/800/600/'+n" v-lightbox v-for="n in 9">
           <img :src="'http://lorempicsum.com/futurama/150/150/'+n" alt="'futurama'+n">
       </a>
   
   <lightbox></lightbox>
  </div>
</template>

<script>

    import lightbox from './components/Lightbox/Lightbox.vue'
    
export default {
  name: 'App',
  components: {
      lightbox

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
