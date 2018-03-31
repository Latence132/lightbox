import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
    bind (el,binding) {
        
        //permet de récupérer l'index
        let index = store.addImage(el.getAttribute('href'))
        
        el.addEventListener('click', (e) => {
            e.preventDefault();
            store.open(index);
        })
    }
})