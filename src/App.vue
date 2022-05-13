<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- Este es el componente que nos dice cual formato de meseta el cliente posee -->
  <chooser-vue/>

  <!-- Aqui van los tipos de mesetas -->
  <!-- <main-vue msg="Tipos de mesetas"/> -->

</template>

<script>
import ChooserVue from './components/Chooser.vue'

// import MainVue from './components/Main.vue'

export default {
  name: 'App',
  components: {
    // MainVue,
    ChooserVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
