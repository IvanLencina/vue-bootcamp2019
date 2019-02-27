import { shallowMount } from '@vue/test-utils'
import Calculator from '@/views/Calculator.vue'

describe('Calculator.vue', () => {
  it('Sum ok when there are two integers', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.setData({ a: 3, b: 5 })

    const sumButton = wrapper.find('#sum')
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(8)
  })

  it('Sum not ok when there are not two integers', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.setData({ a: 3, b: null })

    const sumButton = wrapper.find('#sum')
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(NaN)
  })

  it('Multiply is okey', () => {
    const wrapper = shallowMount(Calculator)

    const inputA = wrapper.find('#inputA')
    const inputB = wrapper.find('#inputB')

    inputA.setValue(3)
    inputB.setValue('3')

    const multiplyButton = wrapper.find('#multiply')
    multiplyButton.trigger('click')

    expect(wrapper.vm.result).toBe(9)
    expect(typeof wrapper.vm.result).toBe('number')
  })
})
