import React from 'react';
import AboutMe from '../../components/AboutPage';

const i18n = {
  description: (
    <p>
      Olá eu sou o Hugo.
    </p>
  ),
  descriptionForGoogle: `
    Desenvolvedor com 12 anos de experiencia.
  `
};

export default (props) => <AboutMe i18n={i18n} {...props} />;

