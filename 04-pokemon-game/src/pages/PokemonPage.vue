<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este Pokemón?</h1>

        <!--TODO: imgagen Pokemón-->
        <Pokemon-picture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
        />

        <!--ToDO: 4 Opciones-->
        <Pokemon-options  
            :pokemons="pokemonArr"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2  class="fade-in">{{message}}</h2>
            <button @click="newGame">Nuevo juego</button>
        </template>

        
    </div>


  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from   '@/helpers/getPokemonOptions'



export default {
    components: {
        PokemonOptions,
        PokemonPicture  
    },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rdnInt = Math.floor(Math.random()*4)
            this.pokemon = this.pokemonArr[rdnInt]
        },
        checkAnswer(selectedID){
            this.showPokemon = true
            this.showAnswer = true

            if(selectedID === this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name}`
            }else{
                this.message = `Oops, era ${this.pokemon.name}`
            }
            
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }

}
</script>

<style>
    

</style>