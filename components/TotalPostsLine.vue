<template>
    <div>
        Total views in collection: {{ totalPosts }}
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            
        }
    },

    computed: {
        ...mapGetters('posts', ['totalPosts'])
    }
}
</script>