<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- Este es el componente que nos dice cual formato de meseta el cliente posee -->
  <chooser-vue/>
  
  <!-- cuando una posicion sea eliminada del arreglo, muestra las medidas: -->
  <!-- TODO: crear condicion para ver cuales tipos de mesetas quedan y crear -->
  <!-- los campos de medidas de acuerdo a el tipo/forma de meseta -->
  <!-- <div v-if=" store.tamano_de_arreglo_mesetas  <= store.tipo_meseta "> -->
  <div v-if=" store.tamano_de_arreglo_mesetas > 0 ">
  <medidas-vue/>
  
  </div>

  <!-- <mesetas-medidas/> -->

  <!-- Aqui van los tipos de mesetas -->
  <!-- <main-vue msg="Tipos de mesetas"/> -->

</template>

<script>

import ChooserVue from './components/Chooser.vue'
import MedidasVue from './components/Medidas.vue'
// import MesetasMedidas from './components/MesetasMedidas.vue';


// import MainVue from './components/Main.vue'
import { store } from './store.js'
import { reactive, ref } from '@vue/reactivity';



export default {
  name: 'App',
  components: {
    // MainVue,
    ChooserVue,
    MedidasVue,
    // MesetasMedidas
  },
  data() {
    return{
      store
   
    }
  },
   mounted() {
    
    console.log(`the component is now mounted.`);
    
    store.tamano_de_arreglo_mesetas = 0;
    this.data.mostrar = store.tipo_meseta;
    this.mostrar = store.tipo_meseta;
    console.log("tipo de meseta component mounted:",store.tipo_meseta);
    console.log("cantidad de formas de mesetas:", store.tamano_de_arreglo_mesetas);
    
    
  },
  setup() {
    let mostrar= ref(0);
    const data = reactive({
      mostrar:0
    });
    
    return {mostrar, data}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
