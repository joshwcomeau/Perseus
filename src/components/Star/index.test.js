/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Star from './index';

describe('Star', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Star />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
