import React from 'react'
import { shallow } from 'enzyme'
import List from '../components/List'

describe('component List', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<List />)
    expect(wrapper.exists()).toEqual(true)
  })
  it('should display a message when no props are passed', () => {
    const wrapper = shallow(<List />)
    const message = wrapper.find('.message')
    expect(message.exists()).toEqual(true)
  })
  it('should display list items when props are passed', () => {
    const wrapper = shallow(<List todoItems={['eat breakfast']} />)
    const todoItems = wrapper.find('.todo-item')
    expect(todoItems.length).toEqual(1)
  })
})