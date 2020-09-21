<template>
    <div class="md-layout">
        <div class="md-layout-item">
             <img :src="movie.Poster" :alt="movie.Title">
        </div>
        <div class="md-layout-item">
             <h2 class="md-display-1"><span @click="getDetails">{{ movie.Title }}</span></h2>
            <p class="md-subheading">
                <span>{{ movie.Year }}</span> | <span>{{ movie.Type }}</span>
            </p>
            <md-button class="md-raised md-primary" @click="getDetails">Details</md-button>
        </div>
        <Dialog ref="modal" :wiki="movieDetails" />
    </div>
</template>

<script>
    import Dialog from './Details'

    export default {
        components: {
            Dialog
        },
        props: {
            movie: Object
        },
        data() {
            return {
                movieDetails: {}
            }
        },
        methods: {
            getDetails: function () {
                //alert(this.movie.imdbID)
                this.$refs.modal.showDialog()
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2.md-display-1 {
        span {
            cursor: pointer !important;
        }
    }

    .md-layout {
        margin-bottom: 25px;
    }
</style>