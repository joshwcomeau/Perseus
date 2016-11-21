/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './index';

describe('TextField', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TextField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
