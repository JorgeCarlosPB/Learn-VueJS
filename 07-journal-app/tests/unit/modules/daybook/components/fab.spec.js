
import {shallowMount} from '@vue/test-utils'
import Fab from '@/modules/daybook/components/MyFab'

describe('Pruebas en el FAB component', ()=>{


    test('debe de mostrar el ícono por defecto', ()=>{
        //fa-plus
        const wrapper = shallowMount (Fab)
        expect (wrapper.html()).toMatchSnapshot()
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()

    })

    test('debe de mostrar el ícono por argumento: fa-circle', ()=>{
        //fa-circle
        const wrapper = shallowMount (Fab,{
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()
        
    })

    test('debe de emitir el evneto on:click cuando se hace click', ()=>{
        //wrapper.emmited('on:click')
        const wrapper = shallowMount (Fab)

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)
        
    })
})