// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from '../../helpers/global-aphrodite';
import random from 'lodash/random';
import sample from 'lodash/sample';

import styles, { fadeInAnimation, twinkleAnimations } from './styles';


const Star = ({ id, size, top, left, blurAmount, haloWidth, animationStyle }) => {
  const padding = size * 2; // Generous padding so that the star's blur isn't cut off
  const twinkleAnimationName = sample(Object.keys(twinkleAnimations));

  return (
    <div
      className={css(styles.starContainer, styles.fadeIn)}
      style={{
        top,
        left,
        animationDuration: `${random(0, 4000)}ms`,
        animationDelay: `${random(0, 1000)}ms`,
      }}
    >
      <svg
        className={css(styles.star, styles[twinkleAnimationName])}
        style={{
          animationDuration: `${random(5, 20, 0.1)}s`,
          animationDelay: `${random(0, 3000)}ms`,
        }}
        width={size + padding}
        height={size + padding}
      >
        <filter id={`blur-${id}`} x="-100%" y="-100%" width="1000%" height="1000%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={blurAmount} />
        </filter>

        <circle
          cx={size / 2 + padding / 2}
          cy={size / 2 + padding / 2}
          r={size / 2}
          fill="white"
          stroke="#281f60"
          strokeWidth={haloWidth}
          filter={`url(#blur-${id})`}
        />
      </svg>
    </div>
  );
};

Star.propTypes = {

};

Star.defaultProps = {

};

export default Star;
