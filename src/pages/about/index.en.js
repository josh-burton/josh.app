import React from 'react';
import AboutMe from '../../components/AboutPage';

const i18n = {
  description: (
    <p>
      Hi, I'm Hugo.
    </p>
  ),
  descriptionForGoogle: `
    Developer with 12 years of experience.
  `
};

export default (props) => <AboutMe i18n={i18n} {...props} />;
