import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue'

describe('Indecision component',()=>{
    let wrapper
    let clgSpy


    beforeEach(()=>{
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')
    })


    test('Hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debería disparar nada',async()=>{

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('Escribir el simbolo ? debe disparar el getAsnwer',async()=>{

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('?')

        //expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()



    })

    test('pruebas en getAnswer',()=>{
        
    })

    test('pruebas en getAnswer - Fallo en el API',()=>{
        
    })
})