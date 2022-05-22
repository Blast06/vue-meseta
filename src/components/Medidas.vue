<template>
  <div>
    <h3>Introduzca medidas de la meseta</h3>
    <p>Para realizar el calculo de la misma</p>

    <!-- TODO: FALTA PONER LAS MEDIDAS EN CADA LINEA DEL DISENO DE LA MESETA -->
    <div
      class="medida0"
      v-if="store.tipo_meseta == 0 && store.escogioMateriales == true"
    >
      <label for="alto">Alto</label>
      <br />
      <input type="number" />
      <br />
      <label for="alto">Ancho</label>
      <br />
      <input type="number" />

      <br />
      <br />
      <button @click="elegirMaterial()">Elegir Material</button>
    </div>

    <div
      class="medida1"
      v-if="store.tipo_meseta == 1 && store.escogioMateriales == true"
    >
      <label for="alto">M1</label>
      <br />
      <input type="number" />
      <br />

      <label for="alto">m2</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m3</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m4</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m5</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m6</label>
      <br />
      <input type="number" />

      <br />
      <br />
      <button @click="elegirMaterial()">Elegir Material</button>
    </div>

    <div
      class="medida1"
      v-if="store.tipo_meseta == 2 && store.escogioMateriales == true"
    >
      <label for="alto">M1</label>
      <br />
      <input type="number" />
      <br />

      <label for="alto">m2</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m3</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m4</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m5</label>
      <br />

      <input type="number" />
      <br />

      <label for="alto">m6</label>
      <br />
      <input type="number" />
      <br />
      <br />
      <!-- TODO: Validar los campos -->
      <button @click="elegirMaterial()">Elegir Material</button>
    </div>

    <!-- <div class="row">
        <img
        v-for=" (tipo_meseta, index) in forma_mesetas" 
        @click="changeFormaMeseta(tipo_meseta, index)" 
        :key="tipo_meseta.id"
        height="200" width="200" 
        :src="tipo_meseta.url">
    </div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

//almacena variables y metodos globales
import { store } from "../store.js";

export default {
  name: "MedidasVue",

  data() {
    return {
      imagen_meseta: {
        id: 1,
        url: require("@/assets/imgs/meseta2.png"),
      },
      store,
    };
  },
  methods: {
    //Que hacer al momento de elegir una meseta
    changeFormaMeseta(tipoMeseta, index) {
      // console.log("Muestra el tipo de meseta", tipoMeseta);
      console.log("THIS IS THE INDEX: =>", index);

      //arreglo de objetos para elegir el tipo de forma de meseta
      //falta agregar en caso de elegir mas de dos tipos de forma de meseta
      if (index >= 1) {
        this.forma_mesetas = this.forma_mesetas.slice(index, index + 1);
      } else {
        this.forma_mesetas = this.forma_mesetas.slice(index, 1);
      }

      console.log(this.forma_mesetas);
      store.changeTipoMeseta(tipoMeseta, 1);
    },

    elegirMaterial() {
      console.log("Ir a elegir material");
    },
  },
  setup() {
    const forma_mesetas = ref([
      {
        id: 1,
        url: require("@/assets/imgs/forma1.png"),
        nombre_material: "Granito negro ubatua",
        precio: 250,
      },
      {
        id: 2,
        url: require("@/assets/imgs/forma2.png"),
        nombre_material: "Granito negro ubatua",
        precio: 350,
      },
      {
        id: 3,
        url: require("@/assets/imgs/forma3.png"),
        nombre_material: "Granito negro ubatua",
        precio: 250,
      },
    ]);
    return { forma_mesetas };
  },
};
</script>

<style></style>
