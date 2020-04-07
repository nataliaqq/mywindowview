// DEPRECATED. USE APOLLO GRAPHQL

import axios from 'axios'

export class Api {
    constructor() {
      this.url = process.env.API_URL
    }
  
    getAllPosts (params) {
        var number = params && params.number || 100
        var page = params && params.page || 1

        return axios.get(this.url + '/posts/?number=' + number + '&&page=' + page) 
    }

    getPost (params) {
        if (!params || !params.id) return Promise.reject()

        return axios.get(this.url + '/posts/' + params.id)
    }

    search (params) {
        var search = params && params.search || ''

        return axios.get(this.url + '/posts/?search=' + search) 
    }

    pingServer () {
        return axios.get(this.url + '/')
    }

    getUser (params) {
        if (!params || !params.token) return Promise.reject(new Error('invalid token'))
        return axios.get('https://api.github.com/user', {
            headers: { Authorization: "token " + params.token }
        })
    }

    getGithubToken (params) {
        if (!params) return Promise.reject(new Error('invalid params'))

        return axios.post('https://github.com/login/oauth/access_token', {
            client_id: params.githubClientId,
            client_secret: params.githubClientSecret,
            code: params.sessionCode,
            accept: 'json'
        })
    }

    login () {
        return axios.get('https://jsonbin.org/_/login')
    }
  }