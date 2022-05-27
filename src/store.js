// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 0,
  tipo_meseta: null,
  tamano_de_arreglo_mesetas: 0,
  combustible: 900,
  costoTotal: 0,
  cotizacion: {
    precioMaterial: 0,
    NombreMaterial: 0,
    CostoTotal: 0,
    Combustible: 0,
    totalMedidas: 0,
  },

  material: {
    precio: 0,
    nombre: "nada",
  },

  changeTipoMeseta(tipo, tamano) {
    this.tamano_de_arreglo_mesetas = tamano;
    this.tipo_meseta = tipo;
    console.log(" tipo_meseta:", this.tipo_meseta);
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

  escogerMateriales() {
    this.escogioMateriales = true;
    console.log(this.escogioMateriales);
  },

  // para resetear los datos cada vez que entra al componente Section
  resetearDatos() {
    (this.count = 0),
      (this.tipo_meseta = null),
      (this.tamano_de_arreglo_mesetas = 0),
      (this.costoTotal = 0),
      (this.combustible = 0);
  },

  calcularCotizacion(medidasSumadas) {
    // formula para calcular
    //tenemos en medidasSumadas todas las medidas sumadas sin importar que tipo de meseta es
    //entonces solo preguntamos por el tipo de material, ya que cada uno tiene un precio diferente
    //por cada metro.

    //mientras mas esquinas o lados tenga un tipo de meseta, mas cara es.

    if (this.tipo_meseta === 0) {
      this.combustible = 700;
      this.costoTotal =
        medidasSumadas * this.material.precio + this.combustible;
      console.log("Costo Total meseta 1:", this.costoTotal);
      this.cotizacion = {
        precioMaterial: this.material.precio,
        NombreMaterial: this.material.nombre,
        CostoTotal: this.costoTotal,
        Combustible: this.combustible,
        totalMedidas: medidasSumadas,
      };
      console.table(this.cotizacion);
    } else if (this.tipo_meseta === 1) {
      this.costoTotal =
        medidasSumadas * 0.3 * this.material.precio + this.combustible;
      console.log("Costo Total meseta 2:", this.costoTotal);
    } else if (this.tipo_meseta === 2) {
      this.costoTotal =
        medidasSumadas * 0.45 * this.material.precio + this.combustible;
      console.log("Costo Total meseta 3:", this.costoTotal);
    }
  },

  //Metodo para crear la cotizacion y luego mostrarla en la tabla
});
