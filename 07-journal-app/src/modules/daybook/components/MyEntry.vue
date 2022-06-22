<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id:10}})">
        <!--Título-->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Esse aute et ex qui eu do enim mollit. Veniam aliqua occaecat mollit incididunt enim 
            ulpa tempor reprehenderit nostrud. Nulla aliqua aute consectetur ad esse nulla amet 
            dolore officia laboris id. Irure amet laboris qui ullamco ut excepteur irure laboris et. 
            Nisi qui tempor officia ipsum veniam amet quis in veniam est pariatur nostrud. Fugiat ullamco 
            do esse mollit incididunt commodo id magna do ea nulla est est. Ex qui esse aliqua proident 
            cupidatat magna occaecat veniam.
        </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }

}

</style>