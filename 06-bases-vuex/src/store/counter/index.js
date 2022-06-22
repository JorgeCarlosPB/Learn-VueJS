//import getRandomInt from "../../helpers/getRandomInt";
import state from "./state";
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'


const counterStore = {
    //TODO falta algo es importante para romper la aplicación
    namespaced: true,


    state: state,

    //Las mutaciones son parecidas a los métodos
    //lAS MUTACIONES SIEMPRE SON SINCRONAS
    mutations: mutations,
    actions,  //es lo mismo que => actions: actions,

    //los getters son parecidos a las computed actions
    getters: getters
}

export default counterStore