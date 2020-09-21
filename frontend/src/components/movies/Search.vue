<template>
    <div class="md-layout">
         <div class="md-layout-item">
            <md-field md-inline>
                <label>Inline</label>
                <md-input v-model="term"></md-input>
                <md-button class="md-raised md-primary" @click="search">Search</md-button>
            </md-field>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                term: 'Search' 
            }
        },
        methods: {
            search() {
                if (this.term.length < 3) {
                    this.$miniToastr.error('The search term most be at least 3 characters!')
                } else {
                    this.$emit('new-search', this.term)
                }
            }
        }
    }
</script>