<template>
<!--  //  @click.stop pour ne pas remonter l'événement, afin de ne pas fermer l'image quand on click dessus-->
  
   <div  @click.stop>
        <div v-if="loading" class="lightbox__loading"></div>
        <transition name="lightbox-fade">
<!--           :key="src" permet de savoir quand est-ce que l'image est chargé-->
            <img :src="src"  class="lightbox__image" :style="style" :key="src">
        </transition>
        
    </div>
</template>


<script>
    export default {
        props: {
            image: String
        },
        data () {
            return {
                loading: true,
                src: false,
                style: {}
            }
        },
        methods: {
            resizeImage (image) {
                let width = image.width;
                let height = image.height;
                
//                //calcule des dimensions de l'image et de l'écran pour mise a échelle
                if(width > window.innerWidth || height >window.innerHeight){
                    
                    let ratio = width / height;
                    let windowRatio = window.innerWidth / window.innerHeight
                    
                    console.log(ratio)
                    console.log(windowRatio)
                    if ( ratio > windowRatio ){
                        console.log('dans la boucle du ratio width')
                        width = window.innerWidth ;
                        height = width / ratio;
                    }
                    else {
                        console.log('dans la boucle du ratio height')
                        height = window.innerHeight ;
                        width = height * ratio;
                    }
                }
                console.log('avant le style');
                this.style = {
                    width: width + 'px',
                    height: height + 'px',
                    top: ((window.innerHeight - height) *0.5) + 'px',
                    left: ((window.innerWidth - width) *0.5) + 'px'
                }
                
            }
        },
        mounted () {
            
            let image = new window.Image();
            
            console.log('avant le chargement')

            //syntaxe ES6 qui ne prend rien en paramètre
            image.onload = _ =>{
                console.log('chargement en cours')
                this.loading= false;

                this.src = this.image;
             
                this.resizeImage(image);
            }
            console.log('fin chargement')
            
            image.src = this.image
            
            this.resizeEvent = () => {
                this.resizeImage(image)
                console.log('resize');
            }
            
            window.addEventListener('resize', this.resizeEvent)
        },
        destroy() {
            window.removeEventListener('resize', this.resizeEvent);
        }
        
    }

</script>