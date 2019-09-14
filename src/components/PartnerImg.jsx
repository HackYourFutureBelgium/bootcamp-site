import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const PartnerImg = ({ src, name, ...rest }) => {
  const renderPartner = file => (
    <Img {...rest} fixed={file.node.childImageSharp.fixed} alt={name} />
  );

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "partners" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fixed(height: 60) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderPartner(images.edges.find(image => image.node.relativePath === `partners/${src}`))
      }
    />
  );
};

PartnerImg.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PartnerImg;
