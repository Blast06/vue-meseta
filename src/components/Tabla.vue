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
                >1002</a
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
             {{ this.Combustible }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
               {{ this.Combustible }}
             
            </td>
          </tr>
          <tr class="bg-lime-500">
            <td class="p-3 text-sm font-bold  text-gray-700 whitespace-nowrap">
              TOTAL
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
             
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <span
                class="p-1.5 text-xs uppercase tracking-wider text-gray-800 rounded-lg bg-opacity-50"
                ></span
              >
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
             
            </td>
            <td class="p-3 text-sm font-weight-bold text-gray-700 whitespace-nowrap">
            {{ montoTotal }}
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
    <!-- <p class=" mr-5 text-right">Itbis inlcuido</p> -->

    <!-- Boton de generar PDF -->
    <button
      @click="generatePDF()" class="text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200"
    >
      Generar PDF
    </button>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
// import VueNumeric from 'vue-numeric'


 






export default {
  name: "TablaVue",
  components: {
    // VueNumeric
    
    },
  data() {
    return {
      cotizacion: {},
      total: 0,
      montoTotal:0,
      heading: "Cotizacion Meseta",
      items: [
        
      ],
      items2:[],
      Combustible:0
     
    };
  },


  mounted() {
    // fx.base = "USD";
    let currencyFormat = Intl.NumberFormat('en-US');
    const route = useRoute();
    this.cotizacion = route.params;
    console.warn("Desde la ruta", this.cotizacion);
    this.Combustible =  `RD$ ${currencyFormat.format(this.cotizacion.Combustible)}`;
    
   

    this.montoTotal = parseInt(this.cotizacion.CostoTotal) + parseInt(this.cotizacion.Combustible);
    this.montoTotal = `RD$ ${currencyFormat.format(this.montoTotal)}` ;
    this.cotizacion.CostoTotal = `${currencyFormat.format(this.cotizacion.CostoTotal)}` ;
 

    // this.items = [
    //   "10001",this.cotizacion.NombreMaterial, 
    //    this.cotizacion.totalMedidas,
    //    `RD$ ${currencyFormat.format(this.cotizacion.precioMaterial)}`,
    //    this.montoTotal
    // ]
    
  },

  computed: {
        costCurrency() {
            return formatter.format(this.cotizacion.Combustible)
        }
    },

    methods: {
      generatePDF(){
       
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      
      });
      // text is placed using x, y coordinates
      // doc.setFontSize(16).text(this.heading, 0.5, 1.0);
      // create a line under heading
      // doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
      // Using autoTable plugin


      
 
     
     
        


        //TODO: APLICAR FUNCION DE CONVERTIR EN MONEDA A LOS CAMPOS DE MONEDA.
        //TODO: AGREGAR UNA TERCERA FILA QUE MUESTRE EL TOTAL
        //CAMBIAR EL COLOR AL VERDE QUE TIENE LA TABLA EN VUE

       
        // this.montoTotal = parseInt(this.cotizacion.CostoTotal) + parseInt(this.cotizacion.Combustible);
        console.warn(this.montoTotal);

        autoTable(doc, {
          head: [['No', 'Detalles', 'Medidas', 'Precio', 'Total']],
          body: [
                  ["1001", this.cotizacion.NombreMaterial, `${this.cotizacion.totalMedidas}mts`, `RD$ ${this.cotizacion.precioMaterial}`,  this.cotizacion.CostoTotal,  ],
                  ["1002", 'Transporte - Combustible', '-',`RD$${this.cotizacion.Combustible}`, `RD$${this.cotizacion.Combustible}`  ],
                  ["TOTAL", '', '-','', this.montoTotal  ],
                  
                  // ...
                ],
        })
      



      // Creating footer and saving file
      // doc
      //   .setFont("times")
      //   .setFontSize(11)
      //   .setFontStyle("italic")
      //   .setTextColor(0, 0, 255)
      //   .text(
      //     "This is a simple footer located .5 inches from page bottom",
      //     0.5,
      //     doc.internal.pageSize.height - 0.5
      //   )
      //   .save(`${this.heading}.pdf`);
      doc.setFontSize(16).text(this.heading, 0.5, 0.5);
      doc.setFont("times").setFontSize(11).setTextColor(0,0,255).save(`${this.heading}.pdf`);
    
      }
    },
};
</script>
<style lang="spanish"></style>
