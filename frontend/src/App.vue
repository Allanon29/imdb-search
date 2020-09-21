<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item">
        <h1 class="logo">IMDB search</h1>
        <MovieSearch v-on:new-search="searchMovies" />
        <MovieList ref="mList" />
      </div>
    </div>
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
  .md-layout {
    max-width: 1024px;
    margin: 0 auto;
  }
  .logo {
    text-align: center;
  }
</style>
