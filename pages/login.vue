<template>
    <div>
        <div v-if="error">error: {{ error }}</div>
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
            error: null
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

    async mounted () {
        let code = this.getParamFromUrl('code', window.location.href)
        let response = await this.getToken({ sessionCode: code })
        let error = response.error
        let token = response.token

        this.error = error ? error : null
        
        if (token) {
            this.getUser({ token: token })
            this.$router.push({
                path: '/ws'
            })
        }
    }
}
</script>