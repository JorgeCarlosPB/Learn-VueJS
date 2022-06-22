<template>
  <div class="d-flex justify-context-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <MyFab />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        MyFab: defineAsyncComponent(()=>import('../components/MyFab.vue'))
    }

}
</script>

<style lang="scss" scoped>

div{
    height: 100%;
}

</style>