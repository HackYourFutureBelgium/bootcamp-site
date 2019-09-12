import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { colors, dimensions } from '../styles/constants';
import { Highlight } from '../components/UI';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rocketIcon, codeEditorIcon, peopleIcon, armIcon } from '../images/icons';

const ImageContainer = styled.aside`
  align-self: flex-end;
  width: 65%;
`;

const Card = styled.div`
  width: 40rem;
  border-left: 4px solid ${colors.pink};
  background: #fff;
  padding: 2rem 3rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: calc(10rem + ${dimensions.header.height});
  left: calc(50% - 40rem);
`;

const ValueWrapper = styled.div`
  background: #fff;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 65% 35%;
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
`;

const IconWrapper = styled.div`
  img {
    max-width: 100%;
  }
`;

const RocketIcon = styled(IconWrapper)`
  width: 50%;
  img {
    transform: rotate(30deg);
  }
`;

const EditorIcon = styled(IconWrapper)`
  width: 55%;
`;

const PeopleIcon = styled(IconWrapper)`
  width: 65%;
`;

const ArmIcon = styled(IconWrapper)`
  width: 70%;
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
      <ValueWrapper>
        <RocketIcon>
          <img src={rocketIcon} alt="" role="presentation" />
        </RocketIcon>
        <EditorIcon>
          <img src={codeEditorIcon} alt="" role="presentation" />
        </EditorIcon>
        <PeopleIcon>
          <img src={peopleIcon} alt="" role="presentation" />
        </PeopleIcon>
        <ArmIcon>
          <img src={armIcon} alt="" role="presentation" />
        </ArmIcon>
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
    </Layout>
  );
};

export default IndexPage;
