<template>

<div>
    <h1>Elegir la forma de la meseta</h1>

    <div class="row">
        <img
        v-for=" (tipo_meseta, index) in forma_mesetas" 
        @click="changeFormaMeseta(tipo_meseta, index)" 
        :key="tipo_meseta.id"
        height="200" width="200" 
        :src="tipo_meseta.url">
    </div>
</div>
  
</template>

<script>

import { ref } from '@vue/reactivity';

//almacena variables y metodos globales 
import { store } from '../store.js'





export default {
    name:'ChooserVue',
     

    data(){
    return{
        imagen_meseta: {
            id: 1,
            url: require('@/assets/imgs/meseta2.png'),
        }
    }
  },
  methods:{
    //Que hacer al momento de elegir una meseta
      changeFormaMeseta(tipoMeseta, index) {
        // console.log("Muestra el tipo de meseta", tipoMeseta);
        console.log("THIS IS THE INDEX: =>",index);
        
        if (index >= 1) {
            this.forma_mesetas = this.forma_mesetas.slice(index,index + 1);    
        }
        else{
         this.forma_mesetas = this.forma_mesetas.slice(index,1);
        }
        
        console.log(this.forma_mesetas);
        store.changeTipoMeseta(1);
        
        
        

          

      }
  },
  setup(){
      const forma_mesetas = ref( [
          {
              id: 1,
              url: require('@/assets/imgs/forma1.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          },
          {
              id: 2,
              url: require('@/assets/imgs/forma2.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 350

          },
          {
              id: 3,
              url: require('@/assets/imgs/forma3.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          }
      ]);
      return {forma_mesetas};
  }
    

}
</script>

<style>

</style>