<template>
  <div class="mt-12">
    <h1 class="font-bold mt-5">Escoger Material</h1>

    <div class="p-2 grid grid-cols-5 justify-center ">
      <div class="flex flex-col " v-for="(item, index) in materiales" :key="index">
        <img
        class=" rounded-sm outline  outline-green-200"
          @click="escogerMaterial(item)"
          :src="item.url"
          height="150"
          width="190"
        />
       
       <p class="" >{{ item.nombre_material }}</p>
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
        nombre_material: "Blanco Brazil",
        precio: 400,
      },
      {
        id: 2,
        url: require("@/assets/imgs/granito2.png"),
        nombre_material: "Gris chino",
        precio: 350,
      },
      {
        id: 3,
        url: require("@/assets/imgs/granito3.png"),
        nombre_material: "Blanco cuarteado",
        precio: 250,
      },
      {
        id: 4,
        url: require("@/assets/imgs/granito4.png"),
        nombre_material: "Blanco pastel",
        precio: 350,
      },
      {
        id: 5,
        url: require("@/assets/imgs/granito5.png"),
        nombre_material: "Blanco rayado",
        precio: 350,
      },
      {
        id: 6,
        url: require("@/assets/imgs/granito6.png"),
        nombre_material: "Gris mosaico",
        precio: 350,
      },
      {
        id: 7,
        url: require("@/assets/imgs/granito7.png"),
        nombre_material: "Crema ubatua",
        precio: 350,
      },
      {
        id: 8,
        url: require("@/assets/imgs/granito8.png"),
        nombre_material: "Verde Ubatuba",
        precio: 900,
      },
      {
        id: 9,
        url: require("@/assets/imgs/granito9.png"),
        nombre_material: "negro pastel",
        precio: 500,
      },
      {
        id: 10,
        url: require("@/assets/imgs/granito10.png"),
        nombre_material: "negro grisaceo",
        precio: 550,
      },
      {
        id: 11,
        url: require("@/assets/imgs/granito11.png"),
        nombre_material: "negro cuarteado",
        precio: 600,
      },
      {
        id: 12,
        url: require("@/assets/imgs/granito12.png"),
        nombre_material: "negro rayado",
        precio: 900,
      },
      {
        id: 13,
        url: require("@/assets/imgs/granito13.png"),
        nombre_material: "Malteada",
        precio: 400,
      },
      {
        id: 14,
        url: require("@/assets/imgs/granito14.png"),
        nombre_material: "negro con cremas",
        precio: 900,
      },
    ]);
    return { materiales };
  },

  methods: {
    escogerMaterial(item) {
      console.log("Elegiste el material:", item);
      store.crearTipoDeMaterial(item.precio, item.nombre_material);
      this.$router.push("/chooser");
    },
  },
};
</script>
<style></style>
