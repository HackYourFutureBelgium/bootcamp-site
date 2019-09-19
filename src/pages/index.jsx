import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { dimensions } from '../styles/constants';
import { Highlight, Card, Button, ExternalLink, DottedGraphic } from '../components/UI';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeadshotCard from '../components/HeadshotCard';
import QuoteCard from '../components/QuoteCard';
import PartnerLink from '../components/Partner';
import { rocketIcon, codeEditorIcon, peopleIcon, armIcon } from '../images/icons';
import teamData from '../data/team.json';
import partnerData from '../data/featured-partners.json';

const HeaderImageContainer = styled.aside`
  align-self: flex-end;
  width: 65%;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const HeaderCard = styled(Card)`
  position: absolute;
  top: 16vw;
  left: calc(50% - ${dimensions.card.width.large}rem);
  @media (max-width: 820px) {
    left: calc(50% - ${dimensions.card.width.large / 2}rem);
    top: 60vw;
  }
  @media (max-width: 400px) {
    left: calc(50% - ${dimensions.card.width.medium / 2}rem);
    top: 60vw;
  }
`;

const ValueWrapper = styled.div`
  align-self: center;
  background: #fff;
  width: 80%;
  margin-top: -12vw;
  padding: 3rem;
  z-index: 1;
  box-shadow: 0 0 4px 0px rgba(81, 81, 81, 0.5);
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 820px) {
    position: static;
    width: 90%;
    margin-top: 10rem;
    align-self: center;
    padding: 2rem;
  }
  @media (max-width: 710px) {
    flex-wrap: wrap;
  }
  .values__wrapper {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 710px) {
      width: 42%;
      height: 46%;
      margin-bottom: 2rem;
      :last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .values__wrapper > div {
    display: flex;
    align-content: center;
    height: 65%;
  }
  p {
    text-align: center;
    vertical-align: text-top;
    height: 35%;
    margin-top: 0;
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
  @media (max-width: 1000px) {
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

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    margin-bottom: 4rem;
  }
  @media (max-width: 1150px) {
    width: 100%;
    align-self: flex-start;
    margin-bottom: 8rem;
  }
  @media (max-width: 880px) {
    margin-bottom: 14rem;
  }
`;

const Quote = styled(QuoteCard)`
  @media (max-width: 1150px) {
    align-self: flex-end;
  }
  @media (max-width: 710px) {
    align-self: center;
  }
`;

const PartnerGrid = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const Partner = styled(PartnerLink)`
  margin-right: 1.6rem;
  margin-top: 2rem;
  width: 12rem;
`;

const PartnerCTA = styled(Link)`
  align-self: flex-end;
  @media (min-width: 400px) and (max-width: 1150px) {
    align-self: flex-start;
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

const TeamPictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  justify-content: flex-start;
  @media (max-width: 930px) {
    justify-content: center;
  }
`;

const Headshot = styled(HeadshotCard)`
  margin-bottom: 8rem;
  border: 1.4rem solid transparent;
  background-clip: padding-box;
  @media (max-width: 970px) {
    margin-bottom: 3rem;
  }
`;

const IndexPage = () => {
  const { headerImage, groupImage, bert } = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "home-group-color.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
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
    }
  `);

  const $teamMembers = teamData.map(member => <Headshot key={member.id} {...member} />);
  const $partners = partnerData.map(partner => <Partner key={partner.id} {...partner} />);
  return (
    <Layout flex>
      {/* <SEO title="Home" /> */}
      <HeaderImageContainer>
        <Img fluid={headerImage.childImageSharp.fluid} alt="Bootcamp atmosphere" />
      </HeaderImageContainer>
      <HeaderCard>
        <p>
          <strong>HackYourFuture&apos;s Bootcamp</strong> boosts refugees&apos; opportunities in the{' '}
          <strong>Belgian job market</strong> through the development of <strong>real-world</strong>
          , <strong>open source</strong>, <strong>positive impact</strong> projects.
        </p>
      </HeaderCard>
      <ValueWrapper>
        {/* Leave alt tags blank, we want these illustrations to be skipped by screen readers */}
        <div className="values__wrapper">
          <div className="values__rocket">
            <img src={rocketIcon} alt="" role="presentation" />
          </div>
          <p>
            <Highlight>4-week</Highlight> intensive bootcamp for refugees
          </p>
        </div>
        <div className="values__wrapper">
          <div className="values__editor">
            <img src={codeEditorIcon} alt="" role="presentation" />
          </div>
          <p>
            Coaching given by <Highlight>IT-experts</Highlight>
          </p>
        </div>
        <div className="values__wrapper">
          <div className="values__people">
            <img src={peopleIcon} alt="" role="presentation" />
          </div>

          <p>
            open source projects with a <Highlight>positive impact</Highlight>
          </p>
        </div>
        <div className="values__wrapper">
          <div className="values__arm">
            <img src={armIcon} alt="" role="presentation" />
          </div>
          <p>
            career starter for the <Highlight>Belgian IT industry</Highlight>
          </p>
        </div>
      </ValueWrapper>
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
              You are able to follow the bootcamp <strong>full time</strong> during the{' '}
              <strong>6 weeks.</strong>
            </li>
          </ul>
          <ExternalLink href="https://forms.gle/dHP7V9JkNBscaA1C7">
            <Button inverted>Apply now</Button>
          </ExternalLink>
        </WhoCanApplyCard>
        <DottedGraphicApply />
      </WhoCanApply>
      <PartnerSection>
        <Partners>
          <h2>
            <span className="stronger">Partners</span> we&apos;ve worked with
          </h2>
          <PartnerGrid>{$partners}</PartnerGrid>
          <PartnerCTA to="/partners">
            <Button inverted>Become a partner</Button>
          </PartnerCTA>
        </Partners>
        <Quote by="Bert Jehoul" from="Open Recognition Belgium" pic={bert.childImageSharp.fluid}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </Quote>
      </PartnerSection>
      <Team>
        <h2>
          Meet the <span className="stronger">team</span>
        </h2>
        <TeamPictures>{$teamMembers}</TeamPictures>
      </Team>
    </Layout>
  );
};

export default IndexPage;
