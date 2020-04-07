<template>
    <div>
        <v-btn>
            <div>
                login
            </div>
        </v-btn>

        <v-btn>
            <div>logout</div>
        </v-btn>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import { Api } from '../api/api'
import auth from '../mixins/auth'

export default {
    data () {
        return {
            isLogged: false,
            code: null
        }
    },

    mixins: [auth],

    computed: {
        ...mapGetters ('user', ['user'])
    },

    methods: {
        ...mapMutations({
            saveUser: 'user/saveUser'
        })
    },

    mounted () {
        this.code = this.getParamFromUrl('code', window.location.href)
        this.authorizeUser({ sessionCode: this.code })
    //    this.getUser({ token: this.token })
    }
}
</script>