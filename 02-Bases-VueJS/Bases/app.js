const app = Vue.createApp({
    // template: `
    // <h1>hola que tal</h1>
    // <p> Desde app.js </p>
    // `
    
    data(){
        return {
            quote: 'I am Jorge',
            author: 'Me, Who else?'
        }
    },
    methods: {
        changeQuote(event){
            console.log('Hola mundo',event)
            this.author = 'Jorge Carlos'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')