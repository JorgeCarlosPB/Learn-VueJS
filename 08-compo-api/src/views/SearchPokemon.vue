<template>
  <h1>Buscar pokemon: </h1>
  <form @submit.prevent="onSubmit">
      <input 
        type="number" 
        placeholder="Número del pokemón" 
        v-model="pokemonId"
        ref="txtSearchId">

  </form>
</template>

<script>
import {ref, onActivated} from 'vue'
import {useRouter} from 'vue-router'
//import router from '@/src/router'

export default {
    setup(){

        const router = useRouter()


        const pokemonId = ref(1)
        const txtSearchId = ref()

        onActivated(()=>{
            //txtSeachId.value.focus()
            txtSearchId.value.select ()
        })


        return{
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
            }
        }


    }
}
</script>

<style>

</style>