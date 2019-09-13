import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, dimensions } from '../styles/constants';
import { Highlight, Card, Button, ExternalLink } from '../components/UI';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rocketIcon, codeEditorIcon, peopleIcon, armIcon } from '../images/icons';

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
  position: relative;
`;

const WhoCanApplyCard = styled(Card)`
  width: 55rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;
  top: 18rem;
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

const GroupImageContainer = styled.div`
  width: 40%;
`;

const IndexPage = () => {
  const { headerImage, groupImage } = useStaticQuery(graphql`
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
            <li>You are very motivated</li>
            <li>You have experience in web development</li>
            <li>You speak &amp; understand English at an intermediate level</li>
            <li>You are able to follow the bootcamp full time during the 6 weeks.</li>
          </ul>
          <ExternalLink href="https://forms.gle/dHP7V9JkNBscaA1C7">
            <Button inverted>Apply now</Button>
          </ExternalLink>
        </WhoCanApplyCard>
      </WhoCanApply>
    </Layout>
  );
};

export default IndexPage;
