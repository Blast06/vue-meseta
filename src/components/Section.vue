<template>
  <div>
    <div class="contenedor">
      <section class="contenido-header justify-center">
        <section class="texts-header">
          <img
            height="300"
            width="300"
            src="@/assets/imgs/meseta_disenando.svg"
          />
          <h1>Disena tu meseta</h1>
          <p>Elige el material, ingresa las medidas y haz el calculo</p>
          <!-- <router-link to="/">Inicio</router-link> -->
          <router-link to="/materiales">Empezar</router-link>
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
    // escogerMateriales() {
    //   store.escogerMateriales();
    // },
  },

  mounted() {
    store.resetearDatos();
  },
};
</script>
<style></style>
