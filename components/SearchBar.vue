<template>
   <div class="parent">
        <v-text-field
            dense
            color="white"
            @input="onInput"
            prepend-inner-icon="mdi-magnify"
            v-model="searchValue"
        >
        </v-text-field>

        <v-card v-if="found.length">
            <v-list-item
                link
                v-for="(item, index) in found" :key="index"
                @click="onItemClick(item)"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }} - {{ readableDate(item.date) }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
   </div>
</template>

<script>
import datesMixin from '../mixins/datesMixin'

import posts from '../apollo/queryPosts.gql'

export default {
    data () {
        return {
            searchValue: '',
            posts: null,
            typingTimer: null,

            queryPostsSkip: true
        }
    },

    mixins: [datesMixin],

    apollo: {
        posts: {
            query: posts,
            variables() {
                return {
                    search: this.searchValue
                }
            },
            prefetch: false,
            skip () {
                return this.queryPostsSkip
            }
        }
    },

    computed: {
        found () {
            if (!this.posts) return []
            return this.posts.posts
        }
    },

    watch: {
        '$route' () {
            this.clearAll()
        }
    },

    methods: {
        onInput (value) {
            if (!value) this.clearAll()
            this.searchValue = value

            clearTimeout(this.typingTimer)
            if (value) {
                this.typingTimer = setTimeout(this.doneTyping, 500)
            }
        },

        doneTyping () {
            this.searchForPosts({ search: this.searchValue })
        },

        onItemClick (post) {
            this.clearInput()
            this.$router.push({
                path: '/views/' + post.id
            })
        },

        searchForPosts (search) {
            this.clearFound()
            this.queryPostsSkip = false
        },

        clearInput () {
            this.searchValue = ''
        },

        clearFound () {
            this.posts = null
        },

        clearAll () {
            this.clearInput()
            this.clearFound()
        }
    },

    mounted () {
        
    }
}
</script>

<style lang="sass" scoped>
.parent
    position: relative

.v-card
    position: absolute
    width: 100%
    max-height: 315px
    overflow-y: auto
</style>