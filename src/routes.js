// import App from "./App.vue";
import TablaVue from "./components/Tabla.vue";
import MaterialesVue from "./components/Materiales.vue";
import ChooserVue from "./components/Chooser.vue";
import SectionVue from "./components/Section.vue";

import { createWebHistory, createRouter } from "vue-router";
// import Notfound from "./components/Notfound";

const routes = [
  { path: "/", name: "Home", component: SectionVue },

  { path: "/cotizacion", name: "Tabla", component: TablaVue },
  { path: "/materiales", name: "Materiales", component: MaterialesVue },
  { path: "/chooser", name: "Chooser", component: ChooserVue },

  //   { path: "/:catchAll(.*)", name: "Notfound", component: Notfound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // shorthand routes:routes
});
export default router;
