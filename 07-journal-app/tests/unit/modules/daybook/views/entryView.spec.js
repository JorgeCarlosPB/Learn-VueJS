import { shallowMount } from '@vue/test-utils'
import {createStore} from 'vuex'

import Swal from 'sweetalert2'
import journal from '@/modules/daybook/store/journal'
import {journalState} from '../../../mock-data/test-journal-state'
import EntryView from '@/modules/daybook/views/EntryView.vue'

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState}
            }
        }
    })

    jest.mock('sweetalert2',() =>({
        fire: jest.fn(),
        showLoading: jest.fn(),
        close: jest.fn()
    }))

describe('Pruebas en el entryview', ()=>{

    const store = createVuexStore(journalState)
    store.dispatch = jest.fn()

    const mockRouter = {
        push: jest.fn()
    }

    let wrapper 
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryView, {
            props: {
                id: '-N5H2wq9F6G2tpFcl1PC'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
    })

    test('Debe de sacar al usuario porque el id no existe', ()=>{

        const wrapper = shallowMount(EntryView, {
            props: {
                id: 'Este ID no existe en el store'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        })

        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'})
    })

    test('Debe de mostrar la entrada correctamente', ()=>{

        expect(wrapper.html()).toMatchSnapshot()
        expect(mockRouter.push).not.toHaveBeenCalled()

    
    })

    test('Debe de borrar la entrada y salir', (done)=>{

        Swal.fire.mockReturnValueOnce( Promise.resolve({isConfirmed: true}))
        wrapper.find('.btn-danger').trigger('click')

        expect(Swal.fire).toHaveBeenCalledWith({
            title: '¿Está seguro?',
            text: 'Una vez borrado, no se puede recuperar',
            showDenyButton: true,
            confirmButtonText: 'Sí, estoy seguro',
        }) 

        setTimeout(()=>{
            expect(store.dispatch).toHaveBeenCalledWith("journal/deleteEntry", "-N5H2wq9F6G2tpFcl1PC")
            expect(mockRouter.push).toHaveBeenCalled()
            done()
        },1)

        

    
    })

    
    
})