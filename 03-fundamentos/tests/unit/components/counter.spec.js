
import { shallowMount} from '@vue/test-utils'

//import Counter from '../../../src/components/Counter
import Counter from '@/components/Counter'

describe('Counter Component',()=>{
    let wrapper 
    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })
    // test('Debe de hacer match con el snapshot',()=>{
    //     const wrapper = shallowMount (Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe tener el valor por defecto "Counter"',()=>{
        

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value=wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto ebe ser  100 en el P',async()=>{
        //Wrapper
        

        //pTags
        const value = wrapper.find('[data-testid="counter"]').text()

        //expect segudno p ===100
        //expect(pValue[1].text()).toBe('100')
        expect(value).toBe('100')
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')

        
    })

    test('Debe de incrementar y decrementar el contador ', async()=>{
        

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })


    test('Debe de establecer el valor por defecto',()=>{

        const {start }= wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)

    })

    test('debe de mostrat la prop title',()=>{

        const title = 'Hola mundo'
        const wrapper = shallowMount(Counter,{
            props:{
                title: title,
                //start: '5'
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

    })


})