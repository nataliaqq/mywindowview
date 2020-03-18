<template>
    <v-pagination
        :value="currentPage"
        :length="totalPages"
        @input="onInput"
    />
</template>

<script>
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
        totalPosts: {
            type: Number,
            default: 0
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

        totalPosts () {
            return this.$store.state.posts.total
        }
    },

    methods: {
        onInput (page) {
            this.currentPage = page
            this.$emit('changePage', page)
        }
    }
}
</script>