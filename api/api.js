import axios from 'axios'

export class Api {
    constructor() {
      this.url = 'https://public-api.wordpress.com/rest/v1.1/sites/mywindowview530920213.wordpress.com'
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
  }