/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import NightSky from './index';

describe('NightSky', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NightSky />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
