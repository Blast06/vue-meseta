<template lang="spanish">
    <div>
        <p>Estos son los materiales</p>
    </div>
</template>
<script>

import { ref } from '@vue/reactivity';

export default {
    name:'MaterialesVue',





    setup() {
          const materiales = ref( [
          {
              id: 1,
              url: require('@/assets/imgs/forma1.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          },
          {
              id: 2,
              url: require('@/assets/imgs/forma2.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 350

          },
          {
              id: 3,
              url: require('@/assets/imgs/forma3.png'),
              nombre_material: 'Granito negro ubatua',
              precio: 250

          }
      ]);
      return {materiales};
    }

    
}
</script>
<style lang="spanish">
    
</style>