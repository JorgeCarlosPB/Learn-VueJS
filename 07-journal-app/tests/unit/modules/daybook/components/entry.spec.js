

import { shallowMount } from "@vue/test-utils";
import Entry from '@/modules/daybook/components/MyEntry.vue'
import { journalState } from "../../../mock-data/test-journal-state";

describe ('' ,()=>{
    const mockRouter= {
        push: jest.fn()
    }
    //const wrapper = shallowMount(entry, {...props...global...})
    const wrapper = shallowMount(Entry, {
        props: {
            entry: journalState.entries[0]
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }

    })

    test('debe de hacer match con el snapshot', ()=>{
        
        expect (wrapper.html()).toMatchSnapshot();

    })

    test('debe de redireccionar al hacer click en el entry-contaienr', ()=>{

        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')

        expect(mockRouter.push).toHaveBeenCalledWith({
                name:"entry",
                params: {
                    id:journalState.entries[0].id
                }
            
        })

    })

    test('pruebas en las propiedades computadas', ()=>{
        //wrapper.vm.<--------------ver las propiedades computadas
        //data: 23
        //month: Julio
        // yearDay: '2021, viernes'
        expect(wrapper.vm.day).toBe(23)
        expect(wrapper.vm.month).toBe('Junio')
        expect(wrapper.vm.yearDay).toBe('2022, Jueves')

    })
})