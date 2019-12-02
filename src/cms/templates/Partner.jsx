import React from 'react';
import PropTypes from 'prop-types';
import StyleInjector from './StyleInjector';
import Partner from '../../components/Partner';

const PartnerPreview = props => {
  const { entry } = props;
  const logoData = entry.getIn(['data', 'logo']);
  const logo = props.getAsset(logoData);

  const fields = ['name', 'website'].reduce((all, field) => {
    all[field] = entry.getIn(['data', field]);
    return all;
  }, {});

  return (
    <StyleInjector>
      <Partner {...fields} logo={logo} />
    </StyleInjector>
  );
};

PartnerPreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default PartnerPreview;
