<template>
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
            />
        </v-col>
    </v-row>
</template>

<script>
import Card from './Card'

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
        posts () {
            return this.$store.state.posts.list
        }
    },
}
</script>