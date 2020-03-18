import Vue from 'vue'
import Vuetify from 'vuetify'
import moment from 'moment'
import { config } from '@vue/test-utils'
Vue.use(Vuetify)
Vue.prototype.$moment = moment


config.mocks.$t = s => s
