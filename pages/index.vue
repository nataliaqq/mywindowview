<template>
    <v-row>
        <v-col cols="12">

            <TotalPostsLine />

            <CollectionContainer />

            <Pagination
                :startPage="startPage"
                :cardsForPage="cardsForPage"
                @changePage="onChangePage"
            />
        </v-col>
    </v-row>
</template>

<script>
import Pagination from '../components/Pagination'
import TotalPostsLine from '../components/TotalPostsLine'
import CollectionContainer from '../components/CollectionContainer'

import { mapMutations } from 'vuex'

import posts from '../apollo/queryPosts.gql'

export default {
    data () {
        return {
            cardsForPage: 12,
            startPage: 1,

            currentPage: null,

            posts: null,
            queryPostsSkip: true
        }
    },

    components: {
        Pagination,
        TotalPostsLine,
        CollectionContainer
    },

    apollo: {
        posts: {
            query: posts,
            variables() {
                return {
                    page: this.currentPage,
                    number: this.cardsForPage
                }
            },
            prefetch: false,
            skip () {
                return this.queryPostsSkip
            }
        }
    },

    watch: {
        'posts' () {
            if (this.posts) this.onPostsLoaded()
        }
    },

    methods: {
        onChangePage (page) {
            this.queryPostsSkip = false
            this.currentPage = page

            this.clearPosts()
        },

        onPostsLoaded () {
            this.fillPosts({ page: this.currentPage })
        },

        fillPosts (params) {
            var page = params && params.page
            if (!page) page = this.startPage
            
            this.posts.posts.forEach(post => this.addPost(post))
            this.setTotal(this.posts.total)
        },

        ...mapMutations({
            addPost: 'posts/add',
            clearPosts: 'posts/clear',
            setTotal: 'posts/setTotal'
        })
    },
    
    mounted () {
        this.onChangePage(this.startPage)
    }
    
}
</script>

