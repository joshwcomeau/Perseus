// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';

import styles from './styles';


const StargazerInfo = () => {
  return (
    <div className={css(styles.stargazerInfo)}>
      Your Component Here :)
    </div>
  );
};

StargazerInfo.propTypes = {

};

StargazerInfo.defaultProps = {

};

export default StargazerInfo;
