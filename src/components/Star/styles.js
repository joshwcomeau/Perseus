import { StyleSheet } from '../../helpers/global-aphrodite';

export const animations = {
  quickTwinkle: {
    '0%': { opacity: 0.5 },
    '90%': { opacity: 0.3 },
    '92%': { opacity: 0.1 },
    '100%': { opacity: 0.5 },
  },
  slowFade: {
    '0%': { opacity: 0.5 },
    '25%': { opacity: 0.1 },
    '40%': { opacity: 0.3 },
    '100%': { opacity: 0.5 },
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
    '55%': { opacity: 0.1 },
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
};

const animationStyles = Object.keys(animations).reduce((styles, name) => ({
  [name]: { animationName: animations[name]},
  ...styles
}));

console.log(animationStyles)


export default StyleSheet.create({
  star: {
    position: 'absolute',
    animationIterationCount: 'infinite',
    animationFillMode: 'both',
    animationTimingFunction: 'linear',
  },
  ...animationStyles,
});
