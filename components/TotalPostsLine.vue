<template>
    <div>
        Total views in collection: {{ totalPosts }}
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },

    computed: {
        totalPosts () {
            return this.$store.state.posts.total
        }
    }
}
</script>