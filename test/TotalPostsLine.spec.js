import { mount, createLocalVue } from '@vue/test-utils'
import TotalPostsLine from '@/components/TotalPostsLine.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()

describe('TotalPostsLine', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(TotalPostsLine, {
      localVue,
      vuetify
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
