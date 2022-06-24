
import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vuex-demo-9d680-default-rtdb.firebaseio.com'
})

console.log(process.env.NODE_ENV)  //Durante Testing
export default journalApi