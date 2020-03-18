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

import { Api } from '../api/api'
import { mapMutations } from 'vuex'

export default {
    data () {
        return {
            cardsForPage: 12,
            startPage: 1
        }
    },

    components: {
        Pagination,
        TotalPostsLine,
        CollectionContainer
    },

    methods: {
        onChangePage (page) {
            this.loadPosts({ page: page })
        },

        loadPosts (params) {
            var page = params && params.page
            if (!page) page = this.startPage

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

