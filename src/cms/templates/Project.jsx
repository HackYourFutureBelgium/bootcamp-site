import React from 'react';
import PropTypes from 'prop-types';
import StyleInjector from './StyleInjector';
import Project from '../../templates/ProjectDetail';

const ProjectPreview = ({ entry, fieldsMetaData }) => {
  const { data } = entry.toJS();

  const partners = data.partners
    ? data.partners.reduce((all, p) => {
        const partner = fieldsMetaData.getIn(['partners', 'partner', p]);
        if (partner) all.push(partner.toJS());
        return all;
      }, [])
    : [];

  const team = data.team
    ? data.team.reduce((all, p) => {
        const person = fieldsMetaData.getIn(['team', 'person', p]);
        if (person) all.push(person.toJS());
        return all;
      }, [])
    : [];

  return (
    <StyleInjector>
      <Project project={{ ...data, team, partners }} />
    </StyleInjector>
  );
};

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    toJS: PropTypes.func
  }).isRequired,
  fieldsMetaData: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default ProjectPreview;
