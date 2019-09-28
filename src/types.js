import { string, arrayOf } from 'prop-types';

export const partnerType = {
  logo: string.isRequired,
  name: string.isRequired,
  website: string.isRequired
};

export const personType = {
  lastName: string.isRequired,
  firstName: string.isRequired,
  role: string.isRequired,
  twitter: string,
  linkedIn: string,
  email: string,
  github: string,
  tags: arrayOf(string),
  picture: string.isRequired
};

export const partialProjectType = {
  crest: string.isRequired,
  name: string.isRequired,
  description: string.isRequired
};

export const projectType = {
  crest: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  date: string.isRequired,
  github: string
};
