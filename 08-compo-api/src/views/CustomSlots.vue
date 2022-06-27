
<template>

        <h1>Aprendiendo slots</h1>
        <button @click="openModal">Abrir modal</button>

        <modal v-if="isOpen" 
            title="Hola mundo"
            @on:close="closeModal">
            <!-- <h2>Titulo del modal</h2>
            <p>Sint id et laboris qui anim consectetur nulla ullamco anim ad.</p>
            <button>Salir</button> -->

            <template v-slot:body>
                <p>Sint id et laboris qui anim consectetur nulla ullamco anim ad.</p>
            </template>

            <template v-slot:footer>
                <button @click="closeModal">Salir</button>
            </template>

            <template v-slot:header>
                <h2>titulo del modal</h2>
            </template>

            <template v-slot:exposed="{newTitle}">
                <h2>{{newTitle}}</h2>

            </template>
            
        </modal>


</template>

<script>
import Modal from '../components/MyModal.vue'
import { ref } from 'vue';

export default {
    components: {Modal},

    setup(){
        const isOpen = ref(false)

        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,

        }
    }

}
</script>

<style>

</style>