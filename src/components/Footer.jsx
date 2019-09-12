import React from 'react';
import styled from 'styled-components';
import { dimensions } from '../styles/constants';

const StyledFooter = styled.footer`
  background-color: #fff;
  width: 100%;
  height: ${dimensions.footer.height};
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 40px 0px rgba(81, 81, 81 0.8);
`;

const Footer = () => <StyledFooter>Footer something something</StyledFooter>;

export default Footer;
