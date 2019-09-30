import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ComputeIO, Input, Output, Button, isClosed } from '../ComputeIO';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('ComputeIO', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<ComputeIO />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Input', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Output', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Output />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Button', () => {
  it('should return an element.', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('`isClosed()` function', () => {
  it('returns a boolean', () => {
    expect(isClosed('^123^abc$$')).toBe(true);
  });
});
