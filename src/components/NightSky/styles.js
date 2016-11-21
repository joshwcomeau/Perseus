import { StyleSheet } from '../../helpers/global-aphrodite';

export default StyleSheet.create({
  nightSky: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#18181c',
    overflow: 'hidden',
  },

  stars: {
    opacity: 0.7,
  },
});
