<template>
    <v-row>
        <v-col cols="12">
            Total views in collection: {{ totalPosts }}
            <v-row
                :align="aligment"
                :justify="justify"
            >
                <v-col
                    cols="4"
                    v-for="(item, index) in posts"
                    :key="index"
                >
                    <Card
                        :img="item.post_thumbnail.URL"
                        :title="item.title"
                        :date="item.date"
                        :id="item.ID"

                        v-masonry-tile class="item"
                    />
                </v-col>
            </v-row>

            <v-pagination
                v-model="currentPage"
                :length="totalPages"
                @input="changePage"
            />
        </v-col>
    </v-row>
</template>

<script>
import Card from '../components/Card'

import { Api } from '../api/api'
import { mapMutations } from 'vuex'

export default {
    data () {
        return {
            aligment: 'stretch',
            justify: 'space-around',
            cardsForPage: 12,
            currentPage: 1
        }
    },

    components: {
        Card
    },

    computed: {
        posts () {
            return this.$store.state.posts.list
        },

        totalPosts () {
            return this.$store.state.posts.total
        },

        totalPages () {
            return parseInt((this.totalPosts + this.cardsForPage - 1) / this.cardsForPage)
        }
    },

    methods: {
        changePage (page) {
            this.currentPage = page
            this.loadPosts({ page: page })
        },

        loadPosts (params) {
            var { page } = params || this.currentPage
            this.clearPosts()
            
            return this.api.getAllPosts({
                number: this.cardsForPage,
                page: page
            })
            
            .then(response => {
                response.data.posts.forEach(
                    post => this.addPost(post)
                )
                this.setTotal(response.data.found)
            })
        },

        ...mapMutations({
            addPost: 'posts/add',
            clearPosts: 'posts/clear',
            setTotal: 'posts/setTotal'
        })
    },
    
    mounted () {
        this.api = new Api()
        this.loadPosts()
    }
    
}
</script>

