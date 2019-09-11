import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../styles/constants';

const HeaderStyle = styled.header`
  background-color: '#fff';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
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
            <Link href="/projects">Our projects</Link>
          </NavItem>
          <NavItem>
            <Link href="/partners">Partners</Link>
          </NavItem>
          <NavItem>
            <Link href="/faq">FAQ</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link href="/partners">Apply now</Link>
          </NavItem>
        </NavItems>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
