<template lang="spanish">
    <div>
        <div class="contenedor ">
                <section class="contenido-header justify-center">
                    <section class="texts-header">
                        <img height="300" width="300" src="@/assets/imgs/meseta_disenando.svg" >
                        <h1>Disena tu meseta</h1>
                        <p>Elige el material, ingresa las medidas y haz el calculo</p>
                        <a @click="escogerMateriales()" >Empezar</a>
                    </section>
                </section>
            </div>
    </div>
</template>
<script>
// import { ref } from "@vue/reactivity";

//almacena variables y metodos globales
import { store } from "../store.js";

export default {
  name: "SectionVue",

  methods: {
    escogerMateriales() {
      store.escogerMateriales();
    },
  },
};
</script>
<style></style>
