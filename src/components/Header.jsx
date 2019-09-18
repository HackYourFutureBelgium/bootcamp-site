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
    flex-direction: column;
    display: ${props => (props.isShown || !props.transitionEnded ? 'flex' : 'none')};
    position: absolute;
    width: 22rem;
    top: ${props => (props.headerIsAtTop ? 7 : 5)}rem;
    right: -5rem;
    padding: 1rem;
    background-color: ${colors.offWhite};
    animation-duration: ${transitionTimes.slideNav}ms;
    animation-name: ${props => css`
      ${props.isShown ? animations.slideNavDown : animations.slideNavUp}
    `};
    animation-fill-mode: forwards;
    transform-origin: bottom;
    z-index: 20;
  }
`;

const NavItem = styled.li`
  color: ${colors.darkPurple};
  margin-left: 5.6rem;
  @media (max-width: 830px) {
    text-align: center;
    padding: 1rem;
    margin-left: 0;
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

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    const isShown = !mobileNavShown;

    if (!isShown) {
      setTransitionEnded(false);
      setTimeout(() => {
        setTransitionEnded(true);
      }, transitionTimes.headerOnScroll * 2);
    }
    setMobileNavState(isShown);
  };

  console.log(mobileNavShown);
  return (
    <HeaderStyle isAtTop={headerIsAtTop} ref={header}>
      <Img fixed={data.file.childImageSharp.fixed} />
      <Nav>
        <Hamburger onClick={toggleMobileNav} />
        <NavItems
          transitionEnded={transitionEnded}
          isShown={mobileNavShown}
          headerIsAtTop={headerIsAtTop}
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
          <NavItem>
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
