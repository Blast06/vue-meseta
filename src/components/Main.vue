<template>
  <div class="hello">
    <h1>DISENO DE {{ msg }}</h1>


<img :src="imagen_meseta.url" height="250" width="250"/>
    <hr>
 <div>
       <img
        @click="changeMeseta(img)"
        v-for="img in images"
        :key="img.url"
        :src="img.url"
        :alt="img.name"
        height="200"
        width="200"
      />
    </div>
    
  </div>
</template>

<script>

import { ref } from '@vue/reactivity';

export default {
  name: 'MainVue',
  props: {
    msg: String
  },
  data(){
    return{
        imagen_meseta: {
            id: 1,
              url: require('@/assets/imgs/meseta2.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250
        }
    }
  },
  methods:{
      changeMeseta(imagenObjeto) {
          this.imagen_meseta = imagenObjeto;
          
          console.log("Muestra esta meseta: ", imagen);
          

      }
  },
  setup(){
      const images = ref( [
          {
              id: 1,
              url: require('@/assets/imgs/meseta2gra.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          },
          {
              id: 2,
              url: require('@/assets/imgs/meseta2gran.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 350

          },
          {
              id: 3,
              url: require('@/assets/imgs/meseta2.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          }
      ]);
      return {images};
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
