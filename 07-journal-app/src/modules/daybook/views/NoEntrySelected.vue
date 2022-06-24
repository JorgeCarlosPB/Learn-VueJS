<template>
  <div class="d-flex justify-context-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <MyFab 
    @on:click="createNewEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'NoEntrySelected',
    components:{
        MyFab: defineAsyncComponent(()=>import('../components/MyFab.vue'))
    },
    methods:{
      createNewEntry(){
        this.$router.push({name: 'entry', params: {id: 'new'}})
      }

    },

}
</script>

<style lang="scss" scoped>

div{
    height: 100%;
}

</style>