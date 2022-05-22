<template>
  <div>
    <h1 class="font-bold mt-5">Escoger Material</h1>

    <div class="grid grid-cols-5">
      <div v-for="(item, index) in materiales" :key="index">
        <img
          @click="escogerMaterial(item)"
          :src="item.url"
          height="150"
          width="150"
        />
        <p class="justify-center">{{ item.nombre_material }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";

//almacena variables y metodos globales
import { store } from "../store.js";

export default {
  name: "MaterialesVue",

  setup() {
    const materiales = ref([
      {
        id: 1,
        url: require("@/assets/imgs/granito1.png"),
        nombre_material: "Granito negro ubatua",
        precio: 250,
      },
      {
        id: 2,
        url: require("@/assets/imgs/granito2.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 3,
        url: require("@/assets/imgs/granito3.png"),
        nombre_material: "Granito negro ubatua",
        precio: 250,
      },
      {
        id: 4,
        url: require("@/assets/imgs/granito4.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 5,
        url: require("@/assets/imgs/granito5.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 6,
        url: require("@/assets/imgs/granito6.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 7,
        url: require("@/assets/imgs/granito7.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 8,
        url: require("@/assets/imgs/granito8.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 9,
        url: require("@/assets/imgs/granito9.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 10,
        url: require("@/assets/imgs/granito10.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 11,
        url: require("@/assets/imgs/granito11.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 12,
        url: require("@/assets/imgs/granito12.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 13,
        url: require("@/assets/imgs/granito13.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 14,
        url: require("@/assets/imgs/granito14.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
    ]);
    return { materiales };
  },

  methods: {
    escogerMaterial(item) {
      console.log("Elegiste el material:", item);
      store.crearTipoDeMaterial(item.precio, item.nombre_material);
    },
  },
};
</script>
<style></style>
