<template>
    <div>
        <h3><span @click="getDetails">{{ movie.Title }}</span></h3>
        <p>
            <span>{{ movie.Year }}</span> | <span>{{ movie.Type }}</span>
        </p>
        <img :src="movie.Poster" :alt="movie.Title">
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