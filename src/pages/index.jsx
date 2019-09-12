import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, dimensions } from '../styles/constants';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ImageContainer = styled.aside`
  align-self: flex-end;
  width: 60%;
`;

const Card = styled.div`
  width: 40rem;
  border-left: 4px solid ${colors.pink};
  background: #fff;
  padding: 2rem 3rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: calc(10rem + ${dimensions.header.height});
  left: calc(50% - 35rem);
`;

const ValueWrapper = styled.div`
  background: #fff;
  padding: 10rem;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-self: center;
  margin-top: -15rem;
  z-index: 1;
  box-shadow: 0 0 4px 0px rgba(81, 81, 81, 0.5);
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-group-color.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout flex>
      <SEO title="Home" />
      <ImageContainer>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageContainer>
      <Card>
        <p>
          <strong>HackYourFuture&apos;s Bootcamp</strong> boosts refugees&apos; opportunities in the{' '}
          <strong>Belgian job market</strong> through the development of <strong>real-world</strong>
          , <strong>open source</strong>, <strong>positive impact</strong> projects.
        </p>
      </Card>
      <ValueWrapper></ValueWrapper>
    </Layout>
  );
};

export default IndexPage;
