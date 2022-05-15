// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 0,
  tipo_meseta: 0,
  tamano_de_arreglo_mesetas: 0,

  changeTipoMeseta(tipo, tamano) {
    this.tamano_de_arreglo_mesetas = tamano;
    this.tipo_meseta = tipo;
    console.log("tipo de meseta changetipo:", this.tipo_meseta);
    console.log("Tamano de meseta changetipo:", this.tamano_de_arreglo_mesetas);
  },
});
