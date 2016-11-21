// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import styles from './styles';


const TextField = () => {
  return (
    <div className={css(styles.textField)}>
      Your Component Here :)
    </div>
  );
};

TextField.propTypes = {

};

TextField.defaultProps = {

};

export default TextField;
