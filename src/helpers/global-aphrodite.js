import { StyleSheet as originalStyleSheet } from 'aphrodite/no-important';

export const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== '*') {
    return null;
  }

  return generateSubtreeStyles(selector.slice(1));
};

const { StyleSheet, css } = originalStyleSheet.extend([{
  selectorHandler: globalSelectorHandler,
}]);

export { StyleSheet, css };
