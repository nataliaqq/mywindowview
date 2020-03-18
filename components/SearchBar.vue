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

        <v-card v-if="found.length > 0">
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
import { Api } from "../api/api"
import datesMixin from '../mixins/datesMixin'

export default {
    data () {
        return {
            searchValue: '',
            found: [],
            typingTimer: null
        }
    },

    mixins: [datesMixin],

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
            this.findPosts({ search: this.searchValue })
        },

        onItemClick (post) {
            this.clearInput()
            this.$router.push({
                path: '/views/' + post.ID
            })
        },

        findPosts (search) {
            this.clearFound()

            return this.api.search(search)

            .then(response => {
                response.data.posts.forEach((post, index) => {
                    this.found.push(post)
                })
            })
        },

        clearInput () {
            this.searchValue = ''
        },

        clearFound () {
            this.found = []
        },

        clearAll () {
            this.clearInput()
            this.clearFound()
        }
    },

    mounted () {
        this.api = new Api()
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