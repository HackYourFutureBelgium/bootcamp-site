import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import FeaturedPartners from '../components/FeaturedPartners';
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
    width: 45%;
  }
  @media (min-width: 1200px) {
    width: 120rem;
    margin-left: auto;
    margin-right: auto;
    background-size: 55rem;
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

const PartnerContainer = styled.section`
  margin-top: 6rem;
  width: 100%;
  padding-right: 8%;
  padding-bottom: 10rem;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 38vw;
  @media (min-width: 1200px) {
    width: 120rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    padding-right: 0;
    background-size: 55rem;
  }
  @media (max-width: 780px) {
    background-image: none;
    padding-top: 0;
    padding-bottom: 0;
  }
  @media (max-width: 520px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
  }
  @media (max-width: 460px) {
    text-align: center;
    justify-content: center;
  }
`;

const PartnerGrid = styled(FeaturedPartners)`
  justify-self: flex-end;
  width: 50%;
  @media (max-width: 780px) {
    width: 90%;
  }
  @media (max-width: 520px) {
    width: 100%;
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
      huddleImage: file(relativePath: { eq: "steve-ibrahim-huddle.jpg" }) {
        childImageSharp {
          fixed(width: 550, quality: 85) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <PageContainer>
      <SEO title="Partners" />
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
      {/* TODO add concrete proposals here */}
      <PartnerContainer image={huddleImage.childImageSharp.fixed.src}>
        <PartnerGrid right />
      </PartnerContainer>
    </PageContainer>
  );
};

export default Partners;
