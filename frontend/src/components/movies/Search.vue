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
            async search() {
                this.$emit('new-search', this.term)
            }
        }
    }
</script>