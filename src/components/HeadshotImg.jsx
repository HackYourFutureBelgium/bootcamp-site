import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Headshot = ({ src, name, ...rest }) => {
  const renderHeadshot = file => (
    <Img {...rest} fluid={file.node.childImageSharp.fluid} alt={name} />
  );

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpg/" }, relativeDirectory: { eq: "headshots" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 220, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderHeadshot(
          images.edges.find(image => image.node.relativePath === `headshots/${src.toLowerCase()}`)
        )
      }
    />
  );
};

Headshot.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Headshot;
