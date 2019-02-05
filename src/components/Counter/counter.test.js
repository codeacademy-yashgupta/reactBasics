import React from 'react';
import Counter from './';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('Counter', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should initialize the value with zero.', () => {
    const wrapper = shallow(<Counter></Counter>);
    expect(wrapper.instance().state.count).toEqual(10);
  })
  it('should increment counter on increaseCount function', () => {
    const wrapper = shallow(<Counter></Counter>);
    wrapper.instance().increaseCounter();
    expect(wrapper.instance().state.count).toEqual(15);
  });
  it('should decrease counter on decsreaseCount function', () => {
    const wrapper =shallow (<Counter></Counter>);
    wrapper.instance().decreaseCounter();
    expect(wrapper.instance().state.count).toEqual(5);
  });
  it('should set the value with initial value when both functions are called once (decrease and increase count)', () => {
    const wrapper = shallow (<Counter></Counter>);
    wrapper.instance().decreaseCounter();
    wrapper.instance().increaseCounter();
    expect(wrapper.instance().state.count).toEqual(10);
  });
});