import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter component', () => {
  it('starts with a count of zero', () => {
    const wrapper = shallow(<Counter />);
    const counterState = wrapper.state().count;
    expect(counterState).toEqual(0);
  });

  test('The current count string in paragraph should be 0', () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 0');
  });

  it('can increment the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const btn = wrapper.find('button.increment');
    btn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: 1');
  })

  test('can decrement the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const btn = wrapper.find('button.decrement');
    btn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current count: -1');
  })
});
