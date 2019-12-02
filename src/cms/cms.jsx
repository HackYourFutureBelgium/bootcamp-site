import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import PersonPreview from './templates/Person';

CMS.registerPreviewTemplate('person', PersonPreview);

/* eslint-disable react/require-default-props */
// see https://github.com/netlify/netlify-cms/issues/1407
CMS.registerWidget(
  'uuid',
  class extends React.Component {
    static propTypes = {
      onChange: PropTypes.func.isRequired,
      forID: PropTypes.string,
      value: PropTypes.node,
      classNameWrapper: PropTypes.string.isRequired
    };

    static defaultProps = {
      value: ''
    };

    componentDidMount() {
      const { value, onChange } = this.props;

      if (!value) onChange(uuid());
    }

    render() {
      const { value, classNameWrapper, forID } = this.props;

      return (
        <span id={forID} className={classNameWrapper}>
          {value}
        </span>
      );
    }
  }
);

CMS.registerMediaLibrary(cloudinary);
