import { keyframes } from 'styled-components';

// expressed in ms
const transitionTimes = {
  headerOnScroll: 300
};

const animations = {
  slideDown: keyframes`
    0% {
        opacity: 0.7;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  `,
  slideUp: keyframes`
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0.7;
      transform: translateY(-100%);
    }
  `
};

const fonts = {
  copy: `'Karla', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`,
  titles: `'Aleo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
};

const colors = {
  black: '#333',
  offWhite: '#F9F9F9',

  // main copy
  darkPurple: '#2F1D68',

  // titles, sub-titles, icons, tags
  purple: '#5524CB',

  // highlights
  yellow: '#FAE3A7',

  // links
  orange: '#E95F48',

  // graphics
  blue: '#AFDEDF',
  pink: '#F9DDD2'
};

// dimensions are expressed in rems
// they're not strings so we can do calculations with them
const dimensions = {
  header: {
    height: {
      large: 11,
      small: 7
    },
    breakpoints: {
      medium: 88
    }
  },
  footer: {
    height: 26
  },
  card: {
    width: {
      large: 40,
      medium: 32
    }
  }
};

export { transitionTimes, animations, colors, dimensions, fonts };
