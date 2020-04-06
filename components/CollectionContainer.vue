<template>
    <v-row
        :align="aligment"
        :justify="justify"
    >
        <v-col
            cols="4"
            v-for="(post, index) in list"
            :key="index"
        >
            <Card
                :img="post.image"
                :title="post.title"
                :date="post.date"
                :id="post.id"
            />
        </v-col>
    </v-row>
</template>

<script>
import Card from './Card'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            aligment: 'stretch',
            justify: 'space-around',
        }
    },

    components: {
        Card
    },

    computed: {
        ...mapGetters('posts', ['list'])
    },
}
</script>