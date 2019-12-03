import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PersonDetail from './PersonDetail';
import { personType } from '../types';

const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  justify-content: flex-start;
  @media (max-width: 930px) {
    justify-content: center;
  }
`;

const Mugshot = styled(PersonDetail)`
  margin-bottom: 8rem;
  border: 1.4rem solid transparent;
  background-clip: padding-box;
  @media (max-width: 970px) {
    margin-bottom: 3rem;
  }
`;

const PersonDetailGallery = ({ people, displayEmails }) => {
  const $people = people.map(person => (
    <Mugshot displayEmail={displayEmails} key={person.id} {...person} />
  ));

  return <Pictures>{$people}</Pictures>;
};

PersonDetailGallery.defaultProps = {
  displayEmails: false
};

PersonDetailGallery.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape(personType)).isRequired,
  displayEmails: PropTypes.bool
};

export default PersonDetailGallery;
