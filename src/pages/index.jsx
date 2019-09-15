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
import Partner from '../components/Partner';
import { rocketIcon, codeEditorIcon, peopleIcon, armIcon } from '../images/icons';
import teamData from '../data/team.json';
import partnerData from '../data/featured-partners.json';

const HeaderImageContainer = styled.aside`
  align-self: flex-end;
  width: 65%;
`;

const HeaderCard = styled(Card)`
  position: absolute;
  top: calc(10rem + ${dimensions.header.height});
  left: calc(50% - 40rem);
`;

const ValueWrapper = styled.div`
  background: #fff;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, 18%);
  grid-template-rows: 65% 35%;
  justify-content: space-evenly;
  place-items: center;
  width: 80%;
  margin-top: -15rem;
  padding: 3rem;
  z-index: 1;
  box-shadow: 0 0 4px 0px rgba(81, 81, 81, 0.5);
  p {
    grid-row: 2/3;
    align-self: start;
    text-align: center;
  }
  > div {
    img {
      max-width: 100%;
    }
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
  margin-bottom: 38rem;
  position: relative;
`;

const WhoCanApplyCard = styled(Card)`
  width: 55rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;
  top: 18rem;
  z-index: 2;
  ul {
    padding: 0;
    margin-left: 1.6rem;
  }
  ul li {
    margin-bottom: 1.6rem;
  }
  a {
    align-self: flex-end;
  }
`;

const DottedGraphicApply = styled(DottedGraphic)`
  position: absolute;
  left: 60%;
  top: 11.5rem;
`;

const GroupImageContainer = styled.div`
  width: 40%;
`;

const PartnerSection = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 17rem;
`;

const Partners = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fill, 8rem);
  place-items: center;
  row-gap: 2rem;
  margin-bottom: 3rem;
`;

const PartnerCTA = styled(Link)`
  align-self: flex-end;
`;

const Team = styled.section`
  width: 80%;
  margin: 0 auto 8rem;
`;

const TeamPictures = styled.div`
  display: flex;
  margin-top: 4rem;
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
          fixed(width: 70, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const $teamMembers = teamData.map(member => <HeadshotCard key={member.id} {...member} />);
  const $partners = partnerData.map(partner => <Partner key={partner.id} {...partner} />);
  return (
    <Layout flex>
      <SEO title="Home" />
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
        <QuoteCard
          by="Bert Jehoul"
          from="Open Recognition Belgium"
          pic={bert.childImageSharp.fixed}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </QuoteCard>
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
