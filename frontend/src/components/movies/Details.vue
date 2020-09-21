<template>
  <div>
    <md-dialog :md-active.sync="dialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <div class="md-layout">
          <div class="md-layout-item">
              <p>
                  {{ wiki.Title }}
              </p>
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
        wiki: Object
    },
    data: () => ({
      dialog: false
    }),
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