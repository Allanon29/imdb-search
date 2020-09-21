<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-progress-spinner md-mode="indeterminate" v-if="loading"></md-progress-spinner>
            <h2 class="md-display-2" v-if="total > 0">Search results ({{ total }})</h2>
            <div class="movie" v-for="m in movies" :key="m.imdbID">
                <MovieItem :movie="m" />
                <md-divider></md-divider>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieService from '../../services/movie'
    import MovieItem from './Movie'

    export default {
        components: {
            MovieItem
        },
        data: () => {
            return {
                page: 1,
                movies: [],
                total: 0,
                loading: false
            }
        },
        methods: {
            loadResults: async function (term) {
                this.loading = true
                try {
                    const result = await MovieService.search(term)
                    console.log(result.data.Search)
                    this.movies = result.data.Search
                    this.total = result.data.totalResults
                } catch (e) {
                    this.$miniToastr.error(e, 'Error')
                }
                this.loading = false
            }
        }
    }

</script>

<style lang="scss">
    .movie {
        margin-bottom: 25px;
    }
</style>