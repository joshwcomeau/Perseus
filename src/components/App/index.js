// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import DevTools from '../DevTools';
import NightSky from '../NightSky';
import styles from '../../global-styles';


const App = ({ children }) => (
  <div className={css(styles.globals)}>
    {children}
    <NightSky />
    <DevTools />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
