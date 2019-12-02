import React from 'react';
import PropTypes from 'prop-types';
import StyleInjector from './StyleInjector';
import PersonDetail from '../../components/PersonDetail';

const PersonPreview = props => {
  const { entry } = props;
  const pictureData = entry.getIn(['data', 'picture']);
  const picture = props.getAsset(pictureData);

  const fields = ['firstName', 'lastName', 'role', 'twitter', 'linkedIn', 'email', 'github'].reduce(
    (all, field) => {
      all[field] = entry.getIn(['data', field]);
      return all;
    },
    {}
  );
  return (
    <StyleInjector>
      <PersonDetail {...fields} picture={picture} />
    </StyleInjector>
  );
};

PersonPreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default PersonPreview;
