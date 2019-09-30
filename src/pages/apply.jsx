import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { colors } from '../styles/constants';
import { ExternalLink, Button, Highlight } from '../components/UI';
import { armIcon, calendarIcon, speechBubbleIcon, codeEditorIcon } from '../images/icons';

const PageContainer = styled(Layout)`
  width: 85%;
  margin: 0 auto;
`;

const IntroContainer = styled.div`
  h2 {
    font-size: 1.7rem;
    margin-top: 4rem;
  }
  p {
    width: 60%;
    max-width: 70rem;
  }
  a {
    color: ${colors.orange};
  }
  @media (max-width: 860px) {
    p {
      width: 80%;
    }
  }
  @media (max-width: 600px) {
    p {
      width: 100%;
    }
  }
`;

const Requirements = styled.div`
  margin: 4rem auto;
  background: #fff;
  width: 100%;
  max-width: 100rem;
  padding: 2rem;
  box-shadow: 0 0 4px 0px rgba(81, 81, 81, 0.5);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 6fr auto;
  column-gap: 2rem;
  row-gap: 0.5rem;
  place-items: center;
  @media (max-width: 820px) {
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
    column-gap: 3rem;
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
  .requirements__arm {
    width: 60%;
  }
  .requirements__editor {
    width: 45%;
  }
  .requirements__speechbubble {
    width: 65%;
  }
  .requirements__calendar {
    width: 55%;
  }
`;

const Apply = () => {
  return (
    <PageContainer>
      {/* <SEO title="Apply" /> */}
      <IntroContainer>
        <h2>
          Apply for our <strong>next bootcamp</strong>
        </h2>
        <p>
          We provide a unique opportunity for refugee web developers to show their potential while
          connecting them with the Belgian labour market. Women are strongly encouraged to apply.
        </p>
        <p>
          If you don&apos;t have experience as a web developer yet,{' '}
          <ExternalLink href="https://hackyourfuture.be">our web development school</ExternalLink>{' '}
          will be a better fit.
        </p>
        <p>
          <strong>*This bootcamp is free:</strong> we cover transport costs and provide laptops for
          participants who don’t have their own. Dropping out during the 4-week period is not
          possible.
        </p>
        <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSdQhs9AssVR9G-OhZXcIoY4HOiV3sD2ipOsoaWGAZyBXsQACQ/viewform">
          <Button inverted>Apply now!</Button>
        </ExternalLink>
      </IntroContainer>
      <Requirements>
        {/* Leave alt tags blank, we want these illustrations to be skipped by screen readers */}
        <div className="requirements__arm">
          <img src={armIcon} alt="" role="presentation" />
        </div>
        <div className="requirements__editor">
          <img src={codeEditorIcon} alt="" role="presentation" />
        </div>
        <div className="requirements__speechbubble">
          <img src={speechBubbleIcon} alt="" role="presentation" />
        </div>
        <div className="requirements__calendar">
          <img src={calendarIcon} alt="" role="presentation" />
        </div>
        <p>
          You&apos;re <Highlight>motivated</Highlight> to work on an impactful project
        </p>
        <p>
          You have experience in <Highlight>web development</Highlight>
        </p>
        <p>
          You <Highlight>speak &amp; understand English</Highlight> at an intermediate level
        </p>
        <p>
          You are able to join us from <Highlight>Monday to Thursday </Highlight> for{' '}
          <Highlight>4 weeks</Highlight>
        </p>
      </Requirements>
    </PageContainer>
  );
};

export default Apply;
