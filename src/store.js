// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 0,
  tipo_meseta: 0,

  changeTipoMeseta(tipo) {
    this.tipo_meseta = tipo;
  },
});
