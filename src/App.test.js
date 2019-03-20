import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

describe('component App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('has an initial state of "{todoItems: hi"}', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().todoItems).toBe('h')
  })
  it('renders the List component', () => {
    const wrapper = shallow(<App />)
    const list = wrapper.find('List')
    expect(list.exists()).toBe(true)
  })
  it('updates state appropriately when "add item" button is clicked', () => {
    const wrapper = shallow(<App />)
    wrapper.find('.submit-button').simulate('click')
    expect(wrapper.state().todoItems).toHaveLength(1)
  })
})
