import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('should contain 1 p element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('[text="Some title"]').exists()).toBe(true)
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
