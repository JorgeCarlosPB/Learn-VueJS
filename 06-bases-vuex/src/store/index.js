import { createStore } from 'vuex'
import counterStore from './counter'


export default createStore({
    //State es igual que data
    modules: {
        counter: counterStore,
        
    }
})