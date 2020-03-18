<template>
   <div>
       <v-container>
           <h1>{{ title }}</h1>
           <img :src="post.featured_image" v-if="post">
       </v-container>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Api } from '@/api/api'
import datesMixin from '@/mixins/datesMixin' 

export default {
    data () {
        return {
           post: null
        }
    },

    mixins: [datesMixin],

    computed: {
        title () {
            return this.post && this.post.title + (this.post.date ? ' - ' + this.readableDate(this.post.date) : '')
        }
    },

    methods: {
        loadPost (params) {
            return this.api.getPost(params)

            .then(response => {
                this.post = response.data
            })
        }
    },

    mounted () {
        if (!this.$route.params.id) this.$router.push({ path: '/' })

        this.api = new Api()

        var id = this.$route.params.id
        this.loadPost({ id: id })
    }
}
</script>