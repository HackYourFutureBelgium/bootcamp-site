import React from 'react';
import PropTypes from 'prop-types';
import StyleInjector from './StyleInjector';
import PersonDetail from '../../components/PersonDetail';

const PersonPreview = props => {
  const { entry } = props;
  const pictureData = entry.getIn(['data', 'picture']);
  const picture = props.getAsset(pictureData);

  const { data } = entry.toJS();
  return (
    <StyleInjector>
      <PersonDetail {...data} picture={picture} />
    </StyleInjector>
  );
};

PersonPreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func,
    toJS: PropTypes.func
  }).isRequired
};

export default PersonPreview;
