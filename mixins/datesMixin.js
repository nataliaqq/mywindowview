import moment from 'moment'

export default {
    data () {
        return {
            dataFormat: 'DD MMMM YYYY'
        }
    },

    methods: {
        readableDate(date) {
            return moment(date).format(this.dataFormat)
        }
    }
}