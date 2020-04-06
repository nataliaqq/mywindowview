<template>
   <div>
       <v-container>
           <h1>{{ title }}</h1>
           <img
                :src="post.image"
                v-if="post"
            >
       </v-container>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'
import datesMixin from '@/mixins/datesMixin' 

import post from '@/apollo/queryPost.gql'

export default {
    data () {
        return {
            post: null,

            id: null,
            queryPostSkip: true
        }
    },

    mixins: [datesMixin],

    apollo: {
        post: {
            query: post,
            variables() {
                return {
                    id: this.id
                }
            },
            prefetch: false,
            skip () {
                return this.queryPostSkip
            }
        }
    },

    computed: {
        title () {
            return this.post && this.post.title + (this.post.date ? ' - ' + this.readableDate(this.post.date) : '')
        }
    },

    mounted () {
        if (!this.$route.params.id) this.$router.push({ path: '/' })
        this.id = +this.$route.params.id   
        this.queryPostSkip = false
    }
}
</script>

<style scoped>
    img {
        max-width: 700px;
    }
</style>