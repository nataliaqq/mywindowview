<template>
  <v-card
        height="100%"
    >
        <NuxtLink :to="'views/' + id">
            <v-img
                :src="img"
                aspect-ratio="1.3"
            >
            </v-img>
            <v-card-title>
                {{ title }}
            </v-card-title>

            <v-card-subtitle>
               {{ readableDate(date) }}
            </v-card-subtitle>
        </NuxtLink>

    </v-card>
</template>

<script>
import datesMixin from '../mixins/datesMixin' 

export default {
    mixins: [datesMixin],
    props: {
        img: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        id: {
            type: Number,
            default: null
        }
    }
}
</script>

<style lang="sass" scoped>
    .v-application
        a
            color: inherit
            text-decoration: inherit
</style>
