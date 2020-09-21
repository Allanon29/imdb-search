<template>
  <div id="app">
    <MovieSearch v-on:new-search="searchMovies" />
    <MovieList ref="mList" />
  </div>
</template>

<script>
import MovieList from './components/movies/List.vue'
import MovieSearch from './components/movies/Search.vue'

export default {
  name: 'App',
  components: {
    MovieList,
    MovieSearch
  },
  methods: {
    searchMovies(term) {
      this.$refs.mList.loadResults(term)
    }
  }
}
</script>

<style lang="scss">

</style>
