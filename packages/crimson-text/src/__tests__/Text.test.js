import React from 'react'
import { shallow } from 'enzyme'
import Text from '../Text'

test('should render', () => {
  const wrapper = shallow(<Text />)

  expect(wrapper).toBeTruthy()
})

test('should render children', () => {
  const wrapper = shallow(<Text>Content</Text>)

  expect(wrapper.text()).toBe('Content')
})
