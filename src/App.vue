<template>
  <div id="app">
      <div v-if="title == 'futurama'">
        <a :href="'http://lorempicsum.com/futurama/800/600/'+n" v-lightbox v-for="n in 9">
            <img :src="'http://lorempicsum.com/futurama/150/150/'+n" alt="'futurama'+n">
        </a>
       <lightbox></lightbox>
      </div>
      
<!--      pose des souci lorsque la précédente div est unbind, vuejs ne le voit pas si la section ci-dessous est remplacé par une div-->
      <section v-if="title == 'rio'">
        <a :href="'http://lorempicsum.com/rio/800/600/'+n" v-lightbox v-for="n in 9">
            <img :src="'http://lorempicsum.com/rio/150/150/'+n" alt="'rio'+n">
        </a>
       <lightbox></lightbox>
      </section>
      <button @click="title = 'rio'">rio</button>
      <button @click="title = 'futurama'">futurama</button>
       
  </div>
</template>

<script>

import lightbox from './components/Lightbox/Lightbox.vue'
    
export default {
  name: 'App',
  components: {
      lightbox

  },
    data() {
        return {
            title:'futurama'
        }
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
