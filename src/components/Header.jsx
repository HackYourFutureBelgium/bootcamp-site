import React, { useEffect, useRef, useReducer } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { Button } from './UI';
import { dimensions, colors, transitionTimes, animations } from '../styles/constants';

const HeaderStyle = styled.header`
  background-color: #fff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  height: ${props =>
    props.isInView
      ? `${dimensions.header.height.large}rem`
      : `${dimensions.header.height.medium}rem`};
  position: ${props => (props.isInView ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 0 3px 1px rgba(81, 81, 81, 0.2);
  animation-duration: ${transitionTimes.headerOnScroll * 2}ms;
  transition: height ${transitionTimes.headerOnScroll}ms;
  animation-name: ${props =>
    !props.isInView &&
    css`
      ${animations.slideDown}
    `};
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  color: ${colors.darkPurple};
  margin-left: 5.6rem;
`;

const SCROLL = 'SCROLL';

const initialState = {
  scrollPosition: 0,
  scrollingUp: false,
  headerInView: true
};
const reducer = (state, action) => {
  switch (action.type) {
    case SCROLL: {
      const { pos, headerInView } = action.payload;
      const prevPos = state.scrollPosition;
      return {
        ...state,
        scrollingUp: prevPos > pos,
        scrollPosition: pos,
        headerInView
      };
    }
    default: {
      return { ...state };
    }
  }
};

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

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScroll = () => {
    const $header = header.current;
    if (!$header) return;

    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    const headerInView = window.pageYOffset < $header.clientHeight;
    dispatch({ type: SCROLL, payload: { pos: window.pageYOffset, headerInView } });
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderStyle isInView={state.headerInView} ref={header}>
      <Img fixed={data.file.childImageSharp.fixed} />
      <nav>
        <NavItems>
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
              <Button big>Apply now</Button>
            </Link>
          </NavItem>
        </NavItems>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
