import React from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { ExternalLink } from './UI';
import { dimensions, fonts, colors } from '../styles/constants';
import { markerIcon, twitterIcon, facebookIcon, emailIcon } from '../images/icons';

import 'leaflet/dist/leaflet.css';

const StyledFooter = styled.footer`
  background-color: #fff;
  padding: 2.5rem 10%;
  width: 100%;
  height: ${dimensions.footer.height}rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.4rem;
  box-shadow: 0 1px 6px 3px rgba(81, 81, 81, 0.2);
  display: flex;
  justify-content: space-between;
  h5 {
    font-family: ${fonts.copy};
    font-size: 1.6rem;
    color: ${colors.darkPurple};
    margin: 0 0 2rem;
  }
`;

const MapContainer = styled.div`
  height: 100%;
  display: flex;
`;

const StyledMap = styled(Map)`
  width: 40rem;
  height: 100%;
  margin-right: 2.5rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    padding: 0;
    margin: 0;
  }
`;

const DetailItem = styled.li`
  list-style-type: none;
  background-repeat: no-repeat;
  background-position: left 0.4rem;
  background-size: 1.8rem 1.8rem;
  padding-left: 3rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Location = styled(DetailItem)`
  background-image: url(${markerIcon});
  background-size: 1.8rem 2.2rem;
`;
const Email = styled(DetailItem)`
  background-image: url(${emailIcon});
`;
const Twitter = styled(DetailItem)`
  background-image: url(${twitterIcon});
`;
const Facebook = styled(DetailItem)`
  background-image: url(${facebookIcon});
`;

const StayInformed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MailingSignup = styled.div`
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    input[type='email'] {
      width: 20rem;
      border: 1px solid ${colors.orange};
      padding-left: 1rem;
    }
    input[type='submit'] {
      background: ${colors.orange};
      height: 5rem;
      width: 6rem;
      color: #fff;
      border: 0;
      font-size: 2.2rem;
      cursor: pointer;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
  }
`;

const Footer = () => {
  const { okbeLogo } = useStaticQuery(graphql`
    query {
      okbeLogo: file(relativePath: { eq: "logo/okbe-purple.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const position = [50.8455124, 4.3574726];

  const icon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: [14, 21],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(28, 42)
  });

  return (
    <StyledFooter>
      <MapContainer>
        <StyledMap center={position} zoom={15}>
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution={`&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>`}
          />
          <Marker position={position} icon={icon}>
            <Popup>BeCentral</Popup>
          </Marker>
        </StyledMap>
        <Details>
          <h5>HackYourFuture Belgium</h5>
          <ul>
            <Location>
              BeCentral, Cantersteen 12
              <br />
              1000 Brussels
            </Location>
            <Email>
              <ExternalLink href="mailto:contact@hackyourfuture.be">
                contact@hackyourfuture.be
              </ExternalLink>
            </Email>
            <Twitter>
              <ExternalLink href="https://twitter.com/HackYFutureBE">HackYFutureBE</ExternalLink>
            </Twitter>
            <Facebook>
              <ExternalLink href="https://facebook.com/HackYFutureBE">HackYFutureBE</ExternalLink>
            </Facebook>
          </ul>
        </Details>
      </MapContainer>
      <StayInformed>
        <MailingSignup>
          <h5>Subscribe to our mailing list</h5>
          <form
            action="https://hackyourfuture.us18.list-manage.com/subscribe/post"
            target="_blank"
            method="POST"
          >
            <input type="hidden" name="u" value="54f620a7a642bc8cf6178e441" />
            <input type="hidden" name="id" value="449a9fa432" />
            <input type="email" name="MERGE0" id="MERGE0" placeholder="E-mail address" />
            <input aria-label="Subscribe" type="submit" value=">" />
          </form>
        </MailingSignup>
        <LogoContainer>
          <span>powered by</span>
          <Img fixed={okbeLogo.childImageSharp.fixed} alt="Open Knowledge Belgium logo" />
        </LogoContainer>
      </StayInformed>
    </StyledFooter>
  );
};

export default Footer;
