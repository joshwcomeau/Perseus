import { StyleSheet } from '../../helpers/global-aphrodite';

export const fadeInAnimation = {
  from: { opacity: 0 },
  to: { opacity: 1 }
};

export const twinkleAnimations = {
  quickTwinkle: {
    '0%': { opacity: 0.8 },
    '90%': { opacity: 0.8 },
    '92%': { opacity: 0.1 },
    '100%': { opacity: 0.8 },
  },
  slowFade: {
    '0%': { opacity: 0.75 },
    '25%': { opacity: 0 },
    '40%': { opacity: 0 },
    '100%': { opacity: 0.75 },
  },
  pulse: {
    '0%': { opacity: 0.5},
    '20%': { opacity: 0.2 },
    '30%': { opacity: 1 },
    '50%': { opacity: 0.3 },
    '65%': { opacity: 0.5 },
    '100%': { opacity: 0.5 },
  },
  dormant: {
    '0%': { opacity: 0.4 },
    '65%': { opacity: 0.4 },
    '80%': { opacity: 0.1 },
    '100%': { opacity: 0.4 },
  },
  blinkOut: {
    '0%': { opacity: 0.5 },
    '50%': { opacity: 0.5 },
    '55%': { opacity: 0 },
    '100%': { opacity: 0.5 },
  },
  sideShift: {
    '0%': { opacity: 0.5, transform: 'translateX(-6px)' },
    '50%': { opacity: 0.5, transform: 'translateX(0)' },
    '100%': { opacity: 0.5, transform: 'translateX(-6px)' },
  },
  bright: {
    '0%': { opacity: 0.2},
    '10%': { opacity: 1 },
    '25%': { opacity: 0.2 },
    '100%': { opacity: 0.2 },
  },
  grower: {
    '0%': { opacity: 0.5, transform: 'scale(1)' },
    '50%': { opacity: 0.75, transform: 'scale(2)' },
    '100%': { opacity: 0.5, transform: 'scale(1)' },
  },
};

const animationStyles = Object.keys(twinkleAnimations).reduce((styles, name) => ({
  [name]: { animationName: twinkleAnimations[name]},
  ...styles
}));


export default StyleSheet.create({
  starContainer: {
    position: 'absolute',
  },
  star: {
    animationIterationCount: 'infinite',
    animationFillMode: 'both',
    animationTimingFunction: 'linear',
  },
  fadeIn: {
    animationName: fadeInAnimation,
    animationIterationCount: 1,
    animationFillMode: 'both',
  },
  ...animationStyles,
});
