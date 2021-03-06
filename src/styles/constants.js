import { keyframes } from 'styled-components';

// expressed in ms
const transitionTimes = {
  headerOnScroll: 400,
  slideNav: 300
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
  nav: {
    height: 24
  },
  footer: {
    height: {
      large: 26,
      small: 48
    }
  }
};

const animations = {
  slideHeaderDown: keyframes`
    0% {
        opacity: 0.7;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  `,
  slideNavDown: keyframes`
    0% {
      opacity: 0.7;
      height: 0;
    }
    100% {
      opacity: 1;
      height: ${dimensions.nav.height}rem;
    }
  `,
  slideNavUp: keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 0;
    }
    `
};

export { transitionTimes, animations, colors, dimensions, fonts };
