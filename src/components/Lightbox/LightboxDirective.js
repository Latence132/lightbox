import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
//    binding
    bind (el) {
        console.log('binding');
        //permet de récupérer l'index
        //lorsqu'on passe de futurama a rio des indx inéxistant sont crée
        store.addImage(el.getAttribute('href'))
        
        el.addEventListener('click', (e) => {
            e.preventDefault();
            store.open(el.getAttribute('href'));
        })
    },
    unbind(el){
        console.log('unbinding');
        store.remove(el.getAttribute('href'))
    },
    update(el) {
        console.log('update');
    }
})