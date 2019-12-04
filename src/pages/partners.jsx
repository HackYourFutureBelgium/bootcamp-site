import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import FeaturedPartners from '../components/FeaturedPartners';
import { Card, ExternalLink, Button, DottedGraphic as Dots } from '../components/UI';
import { colors } from '../styles/constants';

const PageContainer = styled(Layout)`
  width: 100%;
  h2 {
    font-size: 1.7rem;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  padding-top: 6rem;
  padding-left: 4rem;
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

const BrochureSection = styled.section`
  width: 40rem;
  margin-left: auto;
  position: relative;
  padding-top: 0;
  @media (min-width: 800px) {
    margin-top: -12rem;
  }
  @media (min-width: 1040px) {
    margin-top: 6rem;
  }
  @media (max-width: 800px) {
    margin-top: 6rem;
  }
  @media (max-width: 580px) {
    margin-right: auto;
    width: 100%;
  }
`;

const BrochureCard = styled(Card)`
  padding-bottom: 6rem;
  padding-top: 2rem;
  position: relative;
  z-index: 2;
  a {
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.orange};
  }
`;

const DottedGraphic = styled(Dots)`
  position: absolute;
  right: 20rem;
  top: 6rem;
  @media (max-width: 1040px) {
    display: none;
  }
`;

const Proposals = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 12rem auto 0;
  @media (max-width: 1040px) {
    margin-top: 6rem;
  }
  @media (max-width: 620px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Proposal = styled(Card)`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const ContactLink = styled(ExternalLink)`
  align-self: flex-end;
  margin-top: auto;
`;

const PartnerContainer = styled.section`
  margin-top: 8rem;
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
        <BrochureSection>
          <h3>
            Check out our <strong>partner brochure</strong>
          </h3>
          <DottedGraphic amountHigh={5} />
          <BrochureCard>
            <a href="/bootcamp-brochure-1.0.pdf">Download the partner brochure</a>
          </BrochureCard>
        </BrochureSection>
      </IntroContainer>
      <Proposals>
        <Proposal hasAccent={false}>
          <h3>Bootcamp partner</h3>
          <p>
            Help the web developers of tomorrow get their first real-world project experience.
            You&apos;ll be contributing to diversity in the IT sector.
          </p>
          <ContactLink href="mailto:contact@hackyourfuture.be">
            <Button inverted small>
              More information &gt;
            </Button>
          </ContactLink>
        </Proposal>
        <Proposal hasAccent={false}>
          <h3>Hiring partner</h3>
          <p>
            Get priority access to the bootcamp graduates, and be updated when new candidates are
            available.
          </p>
          <ContactLink href="mailto:contact@hackyourfuture.be">
            <Button inverted small>
              More information &gt;
            </Button>
          </ContactLink>
        </Proposal>
      </Proposals>
      <PartnerContainer image={huddleImage.childImageSharp.fixed.src}>
        <PartnerGrid right />
      </PartnerContainer>
    </PageContainer>
  );
};

export default Partners;
