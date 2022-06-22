<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary mx-2">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
    <hr>
    <div class="d-flex felx-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?">
            
        </textarea>

    </div>

    <MyFab />

    <img src="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png" alt="entry-picture">

  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
    components: {
        MyFab: defineAsyncComponent(()=>import('../components/MyFab.vue'))
    }

}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position:fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);

}

</style>