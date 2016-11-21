// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import range from 'lodash/range';
import random from 'lodash/random';
import { css } from '../../helpers/global-aphrodite';

import Star from '../Star';
import styles from './styles';


const NightSky = () => {
  const totalNumOfPixels = window.innerWidth * window.innerHeight;
  const numOfStars = Math.floor(totalNumOfPixels * 0.0002);

  const stars = range(numOfStars).map(i => (
    <Star
      key={i}
      id={`star-${i}`}
      size={random(0.5, 3, 0.5)}
      top={random(1, 100, 0.01) + '%'}
      left={random(1, 100, 0.01) + '%'}
      blurAmount={random(0.1, 0.5, 0.1)}
      opacity={random(0, 1)}
      haloWidth={random(0, 0.75, 0.25)}
    />
  ));

  return (
    <div className={css(styles.nightSky)}>
      <div className={css(styles.stars)}>
        {stars}
      </div>
    </div>
  );
};

NightSky.propTypes = {

};

NightSky.defaultProps = {

};

export default NightSky;
