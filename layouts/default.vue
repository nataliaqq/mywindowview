<template>
  <v-app>
    <v-app-bar
        app
    >
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-row
                        :align="alignment"
                        :justify="justify"
                    >
                        <v-col cols="8">
                            <nuxt-link
                                v-for="(navItem, index) in nav"
                                :key="index"
                                :to="navItem.to"
                            >
                                {{ navItem.name }}
                            </nuxt-link>
                        </v-col>
                        <v-col cols="4">
                            <SearchBar />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from '../components/SearchBar'

export default {
    data () {
        return {
            alignment: 'center',
            justify: 'start',
            nav: [
                {
                    name: 'collection',
                    to: '/'
                },
                {
                    name: 'about',
                    to: '/about'
                }
            ]
        }
    },

    head () {
        return {
            title: 'My window view'
        }
    },

    components: {
        SearchBar
    },

    methods: {
        
    },

    mounted () {

    }
}
</script>

<style lang="sass" scoped>
.v-application
    a
        color: white
        padding: 0 8px

.nuxt-link-exact-active
    font-style: italic
    text-decoration: none
</style>
