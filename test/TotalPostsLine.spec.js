import { mount, createLocalVue } from '@vue/test-utils'
import TotalPostsLine from '@/components/TotalPostsLine.vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TotalPostsLine', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(TotalPostsLine, {
      
      // fail when trying to test store
      computed: {
        totalPosts: () => 108
      },
      localVue,
      store,
      vuetify
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
