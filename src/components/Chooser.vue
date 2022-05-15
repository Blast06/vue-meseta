<template>

<div>
    <h1>Elegir Forma de la meseta</h1>
     <!-- <p>Una o varias, de acuerdo a la necesidad</p>    -->
    <div class="row">
        <!-- <p class="obj1">1.</p> -->
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
        },
        
    }
  },
  mounted(){
    store.tamano_de_arreglo_mesetas = this.forma_mesetas.length;

  },
  methods:{
    //Que hacer al momento de elegir una meseta
      changeFormaMeseta(tipoMeseta, index) {
        // console.log("Muestra el tipo de meseta", tipoMeseta);
        console.log("THIS IS THE INDEX: =>",index);
        

        //arreglo de objetos para elegir el tipo de forma de meseta
        //falta agregar en caso de elegir mas de dos tipos de forma de meseta
        if (index >= 1) {
            this.forma_mesetas = this.forma_mesetas.slice(index,index + 1);    
            store.changeTipoMeseta(index, this.forma_mesetas.length);
        }
        else{
         this.forma_mesetas = this.forma_mesetas.slice(index,1);
         store.changeTipoMeseta(index, this.forma_mesetas.length);
        }
        
        // console.log("forma meseta:",this.forma_mesetas[index].id);
        
        
        
        

          

      }
  },
  setup(){
      const forma_mesetas = ref( [
          {
              id: 1,
              url: require('@/assets/svg/forma1.svg'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          },
          {
              id: 2,
              url: require('@/assets/svg/forma2.svg'),
              nombre_material: 'Granito negro ubatua',
              precio: 350

          },
          {
              id: 3,
              url: require('@/assets/svg/forma3.svg'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          }
      ]);
      return {forma_mesetas};
  }
    

}
</script>

<style>

.obj1{
    display: flex;
    
}

</style>