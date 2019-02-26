import { shallowMount } from '@vue/test-utils'
import Calculator from '@/views/Calculator.vue'

describe('Calculator.vue', () => {
  it('Sum ok when two integers', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.setData({ a: 3, b: 5 })
    const sumButton = wrapper.find('#sum')
    sumButton.trigger('click')
    expect(wrapper.vm.result).toBe(8)
  })

  it('Sum not ok when not two integers', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.setData({ a: 3, b: null })
    const sumButton = wrapper.find('#sum')
    sumButton.trigger('click')
    expect(wrapper.vm.result).toBe(NaN)
  })
})
