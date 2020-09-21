<template>
    <div>
        <h3><span @click="getDetails">{{ movie.Title }}</span></h3>
    </div>
</template>

<script>
    export default {
        props: {
            movie: Object
        },
        methods: {
            getDetails: function () {
                alert(this.movie.imdbID)
            }
        }
    }
</script>

<style lang="scss">
    h3 {
        cursor: pointer;
    }
</style>