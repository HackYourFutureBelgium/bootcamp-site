import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { Button, Hamburger } from './UI';
import { dimensions, colors, transitionTimes, animations } from '../styles/constants';

const HeaderStyle = styled.header`
  background-color: #fff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  height: ${props =>
    props.isAtTop
      ? `${dimensions.header.height.large}rem`
      : `${dimensions.header.height.small}rem`};
  position: ${props => (props.isAtTop ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 0 3px 1px rgba(81, 81, 81, 0.2);
  animation-duration: ${transitionTimes.headerOnScroll * 2}ms;
  transition: height ${transitionTimes.headerOnScroll}ms;
  animation-name: ${props =>
    !props.isAtTop &&
    css`
      ${animations.slideHeaderDown}
    `};
`;

const Nav = styled.nav`
  position: relative;
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  @media (max-width: 830px) {
    margin: 0;
    flex-direction: column;
    display: ${props => (props.isShown || !props.transitionEnded ? 'flex' : 'none')};
    pointer-events: ${props => (!props.transitionEnded ? 'none' : 'auto')};
    position: absolute;
    justify-content: space-evenly;
    width: 20rem;
    height: ${dimensions.nav.height}rem;
    top: ${props => (props.headerIsAtTop ? 7.5 : 5.5)}rem;
    right: -5rem;
    background-color: ${colors.offWhite};
    animation-duration: ${transitionTimes.slideNav}ms;
    animation-fill-mode: forwards;
    animation-name: ${props => css`
      ${props.isShown ? animations.slideNavDown : animations.slideNavUp}
    `};
    transition: height ${transitionTimes.slideNav}ms;
    z-index: 20;
  }
`;

const NavItem = styled.li`
  color: ${colors.darkPurple};
  margin-left: 5.6rem;
  position: relative;
  &:not(.nav__cta):after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.3rem;
    background: ${colors.orange};
    content: '';
    opacity: 0;
    transition: all 0.3s;
  }

  &:not(.nav__cta):after {
    bottom: -1rem;
    transform: translateY(-1rem);
  }

  &:not(.nav__cta):hover:after {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 830px) {
    text-align: center;
    padding: 1rem 0.4;
    margin-left: 0;
    &:not(.nav__cta):after {
      bottom: -0.5rem;
      transform: translateY(-0.5rem);
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/bootcamp-subtitled.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const header = useRef(null);
  const nav = useRef(null);
  const navButton = useRef(null);

  const [headerIsAtTop, setHeaderAtTop] = useState(true);
  const [mobileNavShown, setMobileNavState] = useState(false);
  const [transitionEnded, setTransitionEnded] = useState(true);

  const handleScroll = () => {
    const $header = header.current;
    if (!$header) return;

    // const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    const headerAtTopAfterScroll = window.pageYOffset < $header.clientHeight;
    setHeaderAtTop(headerAtTopAfterScroll);
  };

  const toggleMobileNav = (e, value = null) => {
    const isShown = value !== null ? value : !mobileNavShown;

    if (!isShown) {
      setTransitionEnded(false);
      setTimeout(() => {
        setTransitionEnded(true);
      }, transitionTimes.slideNav * 2);
    }
    setMobileNavState(isShown);
  };

  // to get mobile nav state inside of a click event, nasty closures
  const shownRef = useRef(mobileNavShown);
  shownRef.current = mobileNavShown;
  const handleClickOutsideNav = event => {
    if (
      shownRef.current &&
      !nav.current.contains(event.target) &&
      !navButton.current.contains(event.target)
    ) {
      toggleMobileNav(null, false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutsideNav);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutsideNav);
    };
  }, []);

  return (
    <HeaderStyle isAtTop={headerIsAtTop} ref={header}>
      <Img fixed={data.file.childImageSharp.fixed} />
      <Nav>
        <Hamburger ref={navButton} onClick={toggleMobileNav} active={mobileNavShown} />
        <NavItems
          transitionEnded={transitionEnded}
          isShown={mobileNavShown}
          headerIsAtTop={headerIsAtTop}
          ref={nav}
        >
          <NavItem>
            <Link to="/projects">Our projects</Link>
          </NavItem>
          <NavItem>
            <Link to="/partners">Partners</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq">FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem className="nav__cta">
            <Link to="/partners">
              <Button big={headerIsAtTop}>Apply now</Button>
            </Link>
          </NavItem>
        </NavItems>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
