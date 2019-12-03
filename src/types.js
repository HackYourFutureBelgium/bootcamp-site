import { string, arrayOf } from 'prop-types';

export const partnerType = {
  logo: string,
  name: string,
  website: string
};

export const personType = {
  lastName: string,
  firstName: string,
  role: string,
  twitter: string,
  linkedIn: string,
  email: string,
  github: string,
  tags: arrayOf(string),
  picture: string
};

export const partialProjectType = {
  crest: string,
  name: string,
  description: string
};

export const projectType = {
  crest: string,
  name: string,
  description: string,
  date: string,
  github: string
};
