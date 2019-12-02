import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { StyleSheetManager } from 'styled-components';

import GlobalStyle from '../styles';
import PersonDetail from '../components/PersonDetail';

// Nasty workaround to make Styled Components work with the custom preview
const StyleInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyleSheetManager>
    )
  );
};

StyleInjector.propTypes = {
  children: PropTypes.node.isRequired
};

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
