
import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyD78ZsSztSodFINr8T3aFTwPqq2z-ulo-Y '
    }
})

//console.log(process.env.NODE_ENV)  //Durante Testing
export default authApi