<template>
  <div>
    <div class="medida0" v-if="store.tipo_meseta === 0">
      <h3>Introduzca medidas de la meseta</h3>
      <p>Para realizar el calculo de la misma</p>
    </div>

    <!-- TODO: FALTA PONER LAS MEDIDAS EN CADA LINEA DEL DISENO DE LA MESETA -->
    <div class="medida0" v-if="store.tipo_meseta === 0">
      <label for="alto">Alto</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="alto"
      />
      <br />
      <label for="Ancho">Ancho</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="ancho"
      />

      <br />
      <br />
      <button
        @click="cotizar(0, ancho + alto)"
        class="text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200"
      >
        Cotizar
      </button>
    </div>

    <div class="medida1" v-if="store.tipo_meseta == 1">
      <label for="m1">M1</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m1_meseta2"
      />
      <br />

      <label for="m2">m2</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m2_meseta2"
      />
      <br />

      <label for="m3">m3</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m3_meseta2"
      />
      <br />

      <label for="m4">m4</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m4_meseta2"
      />
      <br />

      <label for="m5">m5</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m5_meseta2"
      />
      <br />

      <label for="m6">m6</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m6_meseta2"
      />

      <br />
      <br />
      <button
        @click="cotizar(1, m6_meseta2 + m5_meseta2 + m4_meseta2 + m3_meseta2 + m2_meseta2 + m1_meseta2)"
        class="text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200"
      >
        Cotizar
      </button>
    </div>

    <div class="medida1" v-if="store.tipo_meseta == 2">
      <label for="m1">M1</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m1_meseta3"
      />
      <br />

      <label for="m2">m2</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m2_meseta3"

      />
      <br />

      <label for="m3">m3</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m3_meseta3"

      />
      <br />

      <label for="m4">m4</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m4_meseta3"

      />
      <br />

      <label for="m5">m5</label>
      <br />

      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m5_meseta3"

      />
      <br />

      <label for="m6">m6</label>
      <br />
      <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="number"
        v-model="m6_meseta3"

      />
      <br />
      <br />
      <!-- TODO: Validar los campos -->
      <button
        @click="cotizar(2, m6_meseta3 + m5_meseta3 + m4_meseta3 + m3_meseta3 + m2_meseta3 + m1_meseta3)"
        class="text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200"
      >
        Cotizar
      </button>
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
      // store.changeTipoMeseta(tipoMeseta, 1);
    },

    cotizar(tipo_meseta, medidasSumadas) {
      console.log("Tipo de meseta:", tipo_meseta);
      console.log("campos sumados", medidasSumadas);
      store.calcularCotizacion(medidasSumadas);
      this.$router.push({ name: "Tabla", params: store.cotizacion });
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
