import { mount, createLocalVue } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()

describe('Card', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
        stubs: ["NuxtLink"],
        vuetify,
        localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
