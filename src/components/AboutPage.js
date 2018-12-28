import React from 'react';
import PropTypes from 'prop-types';
import H1 from './H1';
import { getAuthor } from '../data/authors';
import { getStructuredDataForAuthor } from '../structuredData';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const Header = styled.header`
  padding: 0 0 ${({ theme }) => theme.scale(2)} 0;
`;

const AboutPage = (props) => {
  const author = getAuthor('hugomn');
  author.description = props.i18n.descriptionForGoogle;
  const structuredData = getStructuredDataForAuthor(author);

  return (
    <Layout location={props.location}>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <FormattedMessage id="about">
          {(txt) => (
            <Header>
              <Helmet
                title={txt}
                meta={[{ name: 'description', content: txt }]}
              />
              <H1>
                {txt}
              </H1>
            </Header>
          )}
        </FormattedMessage>
        {props.i18n.description}
      </section>
    </Layout>
  );
};

AboutPage.propTypes = {
  i18n: PropTypes.shape({
    description: PropTypes.object.isRequired,
    descriptionForGoogle: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired
};

export default AboutPage;
