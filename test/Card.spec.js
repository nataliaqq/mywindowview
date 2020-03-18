import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Vuetify from 'vuetify'

describe('Card', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
        stubs: ["NuxtLink"],
        vuetify
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
