<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <h3>Search results</h3>
            <div v-for="m in movies" :key="m.imdbID">
                <MovieItem :movie="m" />
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
                movies: []
            }
        },
        methods: {
            loadResults: async function (term) {
                try {
                    const result = await MovieService.search(term)
                    console.log(result.data.Search)
                    this.movies = result.data.Search
                } catch (e) {
                    this.$miniToastr.error(e, 'Error')
                }
            }
        }
    }

</script>