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
            <md-button class="md-raised md-primary" @click="getDetails" v-if="!loading">Details</md-button>
            <md-progress-spinner md-mode="indeterminate" v-if="loading"></md-progress-spinner>
        </div>
        <Dialog ref="modal" :wiki="movieDetails" :film="movie" />
    </div>
</template>

<script>
    import Dialog from './Details'
    import MovieService from '../../services/movie'

    export default {
        components: {
            Dialog
        },
        props: {
            movie: Object
        },
        data() {
            return {
                loading: false,
                movieDetails: {
                    results: false,
                    details: false
                }
            }
        },
        methods: {
            getDetails: async function () {
                this.loading = true
                try {
                    const result = await MovieService.getMovieWiki(this.movie.Title)
                    if (result.data.pages.length > 0) {
                        this.movieDetails.details = result.data.pages[0]
                        this.movieDetails.results = true
                    }
                } catch (e) {
                    this.$miniToastr.error(e, 'Error')
                }
                this.loading = false
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
        margin-bottom: 35px;
    }
</style>