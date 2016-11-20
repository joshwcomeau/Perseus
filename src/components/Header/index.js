// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import styles from './styles';


const Header = () => {
  return (
    <div className={css(styles.header)}>
      Your Component Here :)
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
