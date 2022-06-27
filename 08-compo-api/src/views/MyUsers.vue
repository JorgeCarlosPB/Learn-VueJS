<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}}</h5>

  <div v-if="users.length > 0">
    <user-list
         :users="users"
         v-slot="{user}"
    >
        <h5>{{user.first_name}} {{user.last_name}}</h5>
        <span>{{user.email}}</span>

    </user-list>
  </div>

  <button @click="prevPage">Atrás</button>
  <button @click="nextPage">Siguiente</button>
  <button>Página: {{currentPage}} </button>
</template>

<script>

import useUsers from '../composables/useUsers'
import UserList from '../components/UserList.vue'


export default {
    components: {UserList},

    setup() {
        const { currentPage, errorMessage, isLoading, nextPage, prevPage, users, } = useUsers();

        return {
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
        };
        //Una forma más reducida es pero no se sabe de donde viene todo 
        // return {
        //    ...useUsers()
        // }
    },
    components: { UserList }
}
</script>

<style scoped>
h2{
    text-align: center;
    width: 100%;
}

div{
    display: flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 250px;
}
</style>