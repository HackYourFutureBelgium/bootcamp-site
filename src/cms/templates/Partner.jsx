import React from 'react';
import PropTypes from 'prop-types';
import StyleInjector from './StyleInjector';
import Partner from '../../components/Partner';

const PartnerPreview = props => {
  const { entry } = props;
  const logoData = entry.getIn(['data', 'logo']);
  const logo = props.getAsset(logoData);

  const { data } = entry.toJS();
  return (
    <StyleInjector>
      <Partner {...data} logo={logo} />
    </StyleInjector>
  );
};

PartnerPreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func,
    toJS: PropTypes.func
  }).isRequired
};

export default PartnerPreview;
