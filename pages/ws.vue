<template>
    <div>
        <div v-if="user && user.id === parseInt(adminId)">
            <v-row>
                <v-col cols="12">
                    {{ user ? 'you are logged in with github as ' + user.login : 'not auth '}}
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-btn :color="socketStatus === 'connected' ? 'red' : 'green'">
                        <div @click="connect" v-if="socketStatus === 'disconnected'">connect</div>
                        <div @click="disconnect" v-if="socketStatus === 'connected'">disconnect</div>
                    </v-btn>
                    (now {{ socketStatus }})
               
                    <v-row align="center">
                        <v-col cols="3">
                            <v-text-field
                                v-model="inputMessage"
                            >

                            </v-text-field>
                        </v-col>
                        <v-btn>
                            <div @click="send(inputMessage)">send</div>
                        </v-btn>
                    </v-row>

                    message: {{ message }}
                </v-col>
            </v-row>
        </div>

        <div v-else>
            not auth

            <br>

            pls login to github to get access
            <a :href="'https://github.com/login/oauth/authorize?scope=user:email&client_id=' + this.githubClientId">Click here</a> to login!</a>
        </div>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import auth from '../mixins/auth'

export default {
    data () {
        return {
            adminId: process.env.adminId,
            inputMessage: null,
            token: null
        }
    },

    mixins: [auth],

    computed: {
        ...mapGetters ('socket', ['socketStatus', 'message']),
        
    },

    methods: {
        send (message) {
            this.$socket.send(message)
        },

        connect () {
            this.$connect()
        },

        disconnect () {
            this.$disconnect()
        },

        ...mapMutations ({
            SOCKET_ONOPEN: 'socket/SOCKET_ONOPEN',
            SOCKET_ONCLOSE: 'socket/SOCKET_ONCLOSE',
            SOCKET_ONMESSAGE: 'socket/SOCKET_ONMESSAGE',
        })
    },

    mounted () {
        this.$options.sockets.onopen = function(event) {
            this.SOCKET_ONOPEN()
        }
        this.$options.sockets.onclose = function(event) {
            this.SOCKET_ONCLOSE()
        }
        this.$options.sockets.onmessage = function(event) {
            this.SOCKET_ONMESSAGE(event.data)
        }
    }
}
</script>