import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from './Button';
import { colors } from '../styles/constants';

const HeaderStyle = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  box-shadow: 0 0 40px 0px rgba(81, 81, 81 0.8);
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

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/bootcamp-subtitled.png" }) {
        childImageSharp {
          fixed(width: 105) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HeaderStyle>
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
