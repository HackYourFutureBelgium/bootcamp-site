import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import QuoteCard from '../components/QuoteCard';
import PersonDetailGallery from '../components/PersonDetailGallery';
import FeaturedPartners from '../components/FeaturedPartners';
import { Highlight, Card, Button, ExternalLink, DottedGraphic } from '../components/UI';
import { rocketIcon, codeEditorIcon, peopleIcon, armIcon } from '../images/icons';
import { flattenQueriedJson } from '../util';

const TopSection = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 65%;
  width: 100%;
  @media (max-width: 820px) {
    background-size: 100%;
  }
`;

const HeaderCard = styled(Card)`
  width: 40rem;
  margin: 6rem 0 5.5rem 12%;
  @media (max-width: 820px) {
    margin: 44vw auto 4rem auto;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    margin-top: 38vw;
  }
`;

const ValueWrapper = styled.div`
  margin: 0 auto;
  background: #fff;
  width: 80%;
  z-index: 1;
  padding: 2rem;
  box-shadow: 0 0 4px 0px rgba(81, 81, 81, 0.5);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 6fr auto;
  column-gap: 2rem;
  row-gap: 0.5rem;
  place-items: center;
  @media (max-width: 820px) {
    width: 90%;
    align-self: center;
    padding: 2rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 0.8fr);
    grid-template-rows: 14rem auto 14rem auto;
    column-gap: 6rem;
    row-gap: 0;
    padding: 2rem 4rem 3rem;
  }
  @media (max-width: 450px) {
    grid-template-rows: 10rem auto 10rem auto;
  }
  img {
    max-width: 100%;
  }
  > div {
    @media (max-width: 700px) {
      &:nth-child(3),
      &:nth-child(4) {
        grid-row: 3/4;
      }
    }
    @media (max-width: 400px) {
      transform: scale(1.6, 1.6);
    }
  }
  p {
    align-self: start;
    text-align: center;
    margin: 0 0 1rem;
  }
  .values__rocket {
    width: 40%;
    img {
      transform: rotate(30deg);
    }
  }
  .values__editor {
    width: 45%;
  }
  .values__people {
    width: 55%;
  }
  .values__arm {
    width: 60%;
  }
`;

const WhoCanApply = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 36rem;
  position: relative;
  @media (max-width: 1000px) {
    width: 90%;
    align-self: center;
    margin-bottom: 10rem;
  }
`;

const GroupImageContainer = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const WhoCanApplyCard = styled(Card)`
  width: 55rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;
  top: 18rem;
  z-index: 2;
  @media (max-width: 1000px) {
    position: static;
  }
  @media (max-width: 710px) {
    width: 100%;
  }
  ul {
    padding: 0;
    margin-left: 1.6rem;
  }
  ul li {
    margin-bottom: 1.6rem;
    line-height: 1.6;
  }
  a {
    align-self: flex-end;
  }
`;

const DottedGraphicApply = styled(DottedGraphic)`
  position: absolute;
  left: 60%;
  top: 11.5rem;
  z-index: 0;
  @media (max-width: 1040px) {
    display: none;
  }
`;

const PartnerSection = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 12rem;
  @media (max-width: 1150px) {
    align-self: center;
    flex-direction: column;
  }
`;

const Partners = styled(FeaturedPartners)`
  @media (max-width: 710px) {
    justify-self: center;
  }
`;

const Quote = styled(QuoteCard)`
  @media (max-width: 1150px) {
    align-self: flex-end;
  }
  @media (max-width: 710px) {
    align-self: center;
    width: 100%;
  }
`;

const Team = styled.section`
  width: 80%;
  margin: 0 0 6rem;
  align-self: center;
  @media (max-width: 970px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 930px) {
    text-align: center;
  }
`;

const IndexPage = () => {
  const { headerImage, groupImage, bert, teamData } = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "home-group-color.jpg" }) {
        childImageSharp {
          fixed(width: 1200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      groupImage: file(relativePath: { eq: "group-small-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bert: file(relativePath: { eq: "bert.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 70, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamData: allPersonJson(filter: { isTeamMember: { eq: true } }) {
        edges {
          node {
            id
            picture
            firstName
            lastName
            role
            linkedIn
            twitter
            github
            email
          }
        }
      }
    }
  `);

  const team = flattenQueriedJson(teamData);
  return (
    <Layout flex>
      <SEO title="Home" />
      <TopSection image={headerImage.childImageSharp.fixed.src}>
        <HeaderCard>
          <p>
            <strong>HackYourFuture&apos;s Bootcamp</strong> boosts refugees&apos; opportunities in
            the <strong>Belgian job market</strong> through the development of{' '}
            <strong>real-world</strong>, <strong>open source</strong>,{' '}
            <strong>positive impact</strong> projects.
          </p>
        </HeaderCard>
        <ValueWrapper>
          {/* Leave alt tags blank, we want these illustrations to be skipped by screen readers */}
          <div className="values__rocket">
            <img src={rocketIcon} alt="" role="presentation" />
          </div>
          <div className="values__editor">
            <img src={codeEditorIcon} alt="" role="presentation" />
          </div>
          <div className="values__people">
            <img src={peopleIcon} alt="" role="presentation" />
          </div>
          <div className="values__arm">
            <img src={armIcon} alt="" role="presentation" />
          </div>
          <p>
            <Highlight>4-week</Highlight> intensive bootcamp for refugees
          </p>
          <p>
            Coaching given by <Highlight>IT-experts</Highlight>
          </p>
          <p>
            open source projects with a <Highlight>positive impact</Highlight>
          </p>
          <p>
            career starter for the <Highlight>Belgian IT industry</Highlight>
          </p>
        </ValueWrapper>
      </TopSection>
      <WhoCanApply>
        <GroupImageContainer>
          <Img
            fluid={groupImage.childImageSharp.fluid}
            alt="First bootcamp's participants solving problems"
          />
        </GroupImageContainer>
        <WhoCanApplyCard accentPosition="right">
          <h2>
            Who can <span className="stronger">apply?</span>
          </h2>
          <ul>
            <li>
              You are very <strong className="stronger">motivated</strong>
            </li>
            <li>
              You have <strong>experience</strong> in <strong>web development</strong>
            </li>
            <li>
              You <strong>speak &amp; understand English</strong> at an intermediate level
            </li>
            <li>
              You are able to follow the bootcamp <strong>Monday-Thursday</strong> during the{' '}
              <strong>4 weeks.</strong>
            </li>
          </ul>
          <ExternalLink href="https://forms.gle/dHP7V9JkNBscaA1C7">
            <Button inverted>Apply now</Button>
          </ExternalLink>
        </WhoCanApplyCard>
        <DottedGraphicApply />
      </WhoCanApply>
      <PartnerSection>
        <Partners />
        <Quote by="Bert Jehoul" from="Open Recognition Belgium" pic={bert.childImageSharp.fluid}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </Quote>
      </PartnerSection>
      <Team>
        <h2>
          Meet the <span className="stronger">team</span>
        </h2>
        <PersonDetailGallery people={team.reverse()} />
      </Team>
    </Layout>
  );
};

export default IndexPage;
