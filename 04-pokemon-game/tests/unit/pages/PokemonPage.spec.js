import { shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage component', ()=>{
    let wrapper
    

    beforeEach(()=>{
        wrapper=shallowMount(PokemonPage)
    })

    test('Debe de hacer match con el snapshot', ()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar el mixPokemonArray al montar',()=>{
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('Debe de hacer match con el snapshot cuando cargan los pokemons',()=>{
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrat los componentes de PokemonPicture y PokemonOptions',()=>{
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        
        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()
        //PokemonPicture debe de existir
        //PokemonOptions debe de existir

        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('pokemons')).toBeTruthy()
        //PokemonPicture atribute pokemon id===5
        //PokemonOptionsatribute pokemons toBe true
    })

    test('Pruebas con chekanswer',async()=>{
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        //console.log(wrapper.vm)

        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        
        //console.log(wrapper.find('h2').text())
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find(h2).text()).toBe(`Correcto, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(2)
        expect(wrapper.vm.message).toBe(`Oops, era ${this.pokemon.name}`)
        




    })
})