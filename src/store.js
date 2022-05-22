// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 0,
  tipo_meseta: 0,
  tamano_de_arreglo_mesetas: 0,
  escogioMateriales: false,
  material: {
    precio: 0,
    nombre: "nada",
  },

  changeTipoMeseta(tipo, tamano) {
    this.tamano_de_arreglo_mesetas = tamano;
    this.tipo_meseta = tipo;
    console.log("tipo de meseta tipo_meseta:", this.tipo_meseta);
    console.log(
      "Tamano de meseta tamano_de_arreglo_mesetas:",
      this.tamano_de_arreglo_mesetas
    );
  },

  crearTipoDeMaterial(precio, nombre) {
    this.material.nombre = nombre;
    this.material.precio = precio;
    console.log(this.material);
  },
});
