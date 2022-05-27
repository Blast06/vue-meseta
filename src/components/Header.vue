<template>
  <div class="mb-5">
    <header>
      <nav>
        <section class="contenedor nav">
          <div class="logo">
            <img src="@/assets/imgs/logo.png" alt="" />
          </div>
          <div class="enlaces-header">
            <router-link to="/">Inicio</router-link>
            <!-- <router-link to="/tabla">Contacto</router-link> -->
            <a href="#">Sobre Nosotros</a>
          </div>
        </section>
      </nav>
      <!-- AQUI VA EL CONTENEDOR DEL SECTION -->
    </header>
  </div>
</template>
<script>
// import SectionVue from "./Section.vue";
export default {
  components: {},
  name: "HeaderVue",
};
</script>
<style></style>
