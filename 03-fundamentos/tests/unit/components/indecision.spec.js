import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision.vue'

describe('Indecision component',()=>{
    let wrapper
    let clgSpy

    global.fetch = jest.fn(()=> Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    })) 


    beforeEach(()=>{
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })


    test('Hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debería disparar nada',async()=>{

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('Escribir el simbolo ? debe disparar el getAsnwer',async()=>{

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalled()



    })

    test('pruebas en getAnswer',async()=>{
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('¡Sí!')

    })

    test('pruebas en getAnswer - Fallo en el API',async()=>{
        
        //TODO: fallo en el API
        fetch.mockImplementationOnce(()=>Promise.reject('API is down'))

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')


        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })
})