import { createStore } from 'vuex'


import auth from '@/modules/auth/store'
import journalModule from '@/modules/daybook/store/journal'  

const store = createStore({
    modules:{
        auth,
        journal: journalModule,
        
    }

})


export default store