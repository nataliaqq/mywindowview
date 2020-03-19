<template>
    <v-pagination
        :value="currentPage"
        :length="totalPages"
        @input="onInput"
    />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            currentPage: this.startPage
        }
    },
    props: {
        startPage: {
            type: Number,
            default: 1
        },
        cardsForPage: {
            type: Number,
            default: 10
        },

    },

    computed: {
        totalPages () {
            return parseInt((this.totalPosts + this.cardsForPage - 1) / this.cardsForPage)
        },
        ...mapGetters('posts', ['totalPosts'])
    },

    methods: {
        onInput (page) {
            this.currentPage = page
            this.$emit('changePage', page)
        }
    }
}
</script>