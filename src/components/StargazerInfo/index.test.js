/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import StargazerInfo from './index';

describe('StargazerInfo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StargazerInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
