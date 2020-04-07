import { Api } from '../api/api'
import { mapMutations, mapGetters } from 'vuex'

export default {
    data () {
        return {
            githubClientId: process.env.githubClientId,
            githubClientSecret: process.env.githubClientSecret,

        }
    },

    computed: {
        ...mapGetters ('user', ['user'])
    },

    methods: {

        getParamFromUrl (name, url) {
            if (!url) url = location.href;
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\?&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            return results == null ? null : results[1];
        },

        async getUser (params) { 
            let api = new Api()
            let user

            let token = params && params.token

            try {
                user = await api.getUser({ token: token })
            } catch (err) {
                user = null
                console.log(err)
            }
            this.saveUser(user && user.data)
            return user && user.data
        },

        async authorizeUser (params) {
            if (!params) params = {}
            var api = new Api()
            var response = await api.getGithubToken({
                githubClientId: this.githubClientId,
                githubClientSecret: this.githubClientSecret,
                sessionCode: params.sessionCode
            })
            return response
        },

        login () {
            return
            let api = new Api()
            api.login()
        },

        ...mapMutations ({
            saveUser: 'user/saveUser'
        })
    }
}