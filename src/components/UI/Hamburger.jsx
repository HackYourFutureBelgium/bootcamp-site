import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, transitionTimes } from '../../styles/constants';

// source: https://codepen.io/mutedblues/pen/MmPNPG
// modified to remove floats
const HamburgerButton = styled.button`
  background: inherit;
  border: 0;
  padding: 0.8rem;
  .menu-icon {
    display: inline-block;
    cursor: pointer;
    padding: 1rem 1rem;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: ${colors.darkPurple};
    display: block;
    height: 0.2rem;
    position: relative;
    transition: background ${transitionTimes.slideNav / 2}ms ease-out;
    width: 2.4rem;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: ${colors.darkPurple};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all ${transitionTimes.slideNav / 2}ms ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 0.7rem;
  }

  .menu-icon .navicon:after {
    top: -0.7rem;
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media (min-width: 831px) {
    display: none;
  }
`;

const Hamburger = forwardRef(({ onClick, active, ...rest }, ref) => (
  <HamburgerButton ref={ref} {...rest}>
    <input
      className="menu-btn"
      checked={active}
      type="checkbox"
      id="menu-btn"
      onClick={onClick}
      readOnly
    />
    {/* eslint-disable-next-line */}
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
  </HamburgerButton>
));

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Hamburger;
