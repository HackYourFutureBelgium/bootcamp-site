import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { colors } from '../styles/constants';
import { ExternalLink, Button } from '../components/UI';

const PageContainer = styled(Layout)`
  width: 100%;
  h2 {
    font-size: 1.7rem;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  padding-top: 6rem;
  padding-left: 8%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 38vw;
  p {
    width: 45vw;
  }
  @media (min-width: 1200px) {
    background-size: auto 100%;
  }
  @media (max-width: 780px) {
    background-image: none;
    padding-top: 0;
    margin-top: 4rem;
    p {
      width: 80%;
    }
  }
  @media (max-width: 520px) {
    width: 85%;
    margin: 4rem auto 0;
    padding-left: 0;
    p {
      width: 100%;
    }
  }
  > a {
    margin-top: 2rem;
    display: inline-block;
  }
`;

const Partners = () => {
  const { introImage, huddleImage } = useStaticQuery(graphql`
    query {
      introImage: file(relativePath: { eq: "team-meeting.jpg" }) {
        childImageSharp {
          fixed(width: 550, quality: 85) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      huddleImage: file(relativePath: { eq: "home-group-color.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PageContainer>
      {/* <SEO title="Partners" /> */}
      <IntroContainer image={introImage.childImageSharp.fixed.src}>
        <h2>
          A real career <strong>kickstarter</strong>
        </h2>
        <p>
          Our bootcamp is sponsored by companies looking to support the development of local tech
          talent in the Belgian economy, while promoting diversity in the workplace.
        </p>
        <p>
          You wish to bring your CSR to a next level by making a significant impact on the career of
          talented, newly arrived refugees, while promoting positive, open and innovative ideas? We
          can make this happen.
        </p>
        <ExternalLink href="mailto:contact@hackyourfuture.be">
          <Button inverted>Become our partner</Button>
        </ExternalLink>
      </IntroContainer>
    </PageContainer>
  );
};

export default Partners;
