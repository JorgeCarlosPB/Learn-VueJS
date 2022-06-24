
import { shallowMount } from '@vue/test-utils'
import {createStore} from 'vuex'

import journal from '@/modules/daybook/store/journal'

import EntryList from '@/modules/daybook/components/EntryList.vue'
import {journalState} from '../../../mock-data/test-journal-state'

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState}
            }
        }
    })


describe('Pruebas en el entryList',()=>{

    /*const journalMockModule = {
        namespaced: true,
        getters: {
            //getEntriresbyTerm: jest.fn()
            getEntriesByTerm
        },
        state: ()=>({
            isLoading: false,
            entries: journalState.entries
        })

    }

    const store = createStore({
        modules: {
            journal: {...journalMockModule}
        }
    })*/


    const store = createVuexStore(journalState)
    const mockRouter = {
        push: jest.fn()
    }

    let wrapper 
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryList, {
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
    })
     

    test('Debe de llamar el getEntriesByTerm sin término y mostrar 2 entradas', ()=>{

        console.log(wrapper.html())

        expect(wrapper.findAll('my-entry-stub').length).toBe(2)
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de llamar el getEntriesByTerm y filtrar las entradas', async()=>{
        const input = wrapper.find('input')
        await input.setValue('segunda')

        expect(wrapper.findAll('my-entry-stub').length).toBe(1)
        //expect(wrapper.html()).toMatchSnapshot()

    })

    test('el boton debe de redireccionar a /new', ()=>{
        wrapper.find('button').trigger('click')
        
        expect(mockRouter.push)
            .toHaveBeenCalledWith({name: 'entry', params: {id: 'new'}})

        //expect(wrapper.findAll('entry-stub').length).toBe(1)
        //expect(wrapper.html()).toMatchSnapshot()

    })

    
})