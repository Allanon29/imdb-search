<template>
  <div>
    <md-dialog :md-active.sync="dialog">
      <md-dialog-title>{{ film.Title }}</md-dialog-title>

      <div class="md-layout">
          <div class="md-layout-item">
              <p v-if="!wiki.results">
                  No results for this movie
              </p>
              <div v-else>
                <p v-html="wiki.details.excerpt"></p>
                <a :href="imdbLink" class="button md-dense md-raised md-primary" target="_blank">IMDB</a> | 
                <a :href="wikiLink" class="button md-dense md-raised md-primary" target="_blank">Wikipedia</a>
              </div>
              
          </div>
      </div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="hideDialog">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'MovieWiki',
    props: {
        wiki: Object,
        film: Object
    },
    data: () => ({
      dialog: false
    }),
    computed: {
        wikiLink() {
            return "https://en.wikipedia.org/wiki/" + this.wiki.details.key
        },

        imdbLink() {
            return "https://www.imdb.com/title/" + this.film.imdbID
        }
    },
    methods: {
        showDialog() {
            this.dialog = true
        },
        hideDialog() {
            this.dialog = false
        }
    }
  }
</script>

<style lang="scss" scoped>
    .md-layout {
        padding: 0 25px 0 25px !important;
    }
</style>