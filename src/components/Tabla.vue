<template>
  <div class="mt-20"></div>
  <div class="p-5 h-screen bg-gray-100">
    <h1 class="text-xl mb-2 font-semibold">Cotizacion</h1>

    <div class="overflow-auto rounded-lg shadow hidden md:block m-5">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              No.
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide">Detalle</th>
            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              Medidas(m2)
            </th>
            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              Precio
            </th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              Total
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="bg-white">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline"
                >10001</a
              >
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ this.cotizacion.NombreMaterial }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ this.cotizacion.totalMedidas }}Mts
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              RD${{ this.cotizacion.precioMaterial }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              RD${{
                this.cotizacion.CostoTotal
             
              }}
            </td>
          </tr>
          <tr class="bg-gray-50">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" class="font-bold text-blue-500 hover:underline"
                >10002</a
              >
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              Combustible
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <span
                class="p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50"
              >
                -
              </span>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              RD$
              {{
                this.cotizacion.Combustible
              }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              RD$
              {{
                this.cotizacion.Combustible
              }}
            </td>
          </tr>
          <tr class="bg-lime-500">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              TOTAL
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              Kring New Fit office chair, mesh + PU, black
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <span
                class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50"
                >Cancelled</span
              >
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              16/10/2021
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Boton de generar PDF -->
    <button
      class="text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200"
    >
      Generar PDF
    </button>
  </div>
</template>
<script>
import { useRoute } from "vue-router";

export default {
  name: "TablaVue",
  data() {
    return {
      cotizacion: {},
      total: 0,
    };
  },

  mounted() {
    const route = useRoute();
    this.cotizacion = route.params;
    console.warn("Desde la ruta", this.cotizacion);
  },
};
</script>
<style lang="spanish"></style>
