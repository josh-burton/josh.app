import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedContainer from '../components/FixedContainer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from '../data/messages/en';
import pt from '../data/messages/pt';
import enData from 'react-intl/locale-data/en';
import ptData from 'react-intl/locale-data/pt';
import theme from '../themes/theme';
import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage
} from 'ptz-i18n';

const messages = { en, pt };

addLocaleData([...enData, ...ptData]);

const Layout = (props) => {
  const { children, location } = props;
  const url = location.pathname;
  const isHome = isHomePage(url);
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const { menu, author, sourceCodeLink } = props.data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={langKey}
        messages={messages[langKey]}
      >
        <BodyContainer>
          <Header
            isHome={isHome}
            homeLink={homeLink}
            url={url}
            menu={menu}
          />
          <FixedContainer>
            <main>
              {children}
            </main>
          </FixedContainer>
          <Footer
            author={author}
            langs={langsMenu}
            sourceCodeLink={sourceCodeLink}
          />
          <GlobalStyle />
        </BodyContainer>
      </IntlProvider>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  a {
    color: ${props => props.theme.a.color};
    text-decoration: ${props => props.theme.a.textDecoration};
    transition: all 0.2s;
    :hover {
      transition: all 0.2s;
      color: ${props => props.theme.a.hover.color};
    }
  }
  b, strong {
    font-weight: bold;
  } 
`;

const BodyContainer = styled.div`
  font-family: ${props => props.theme.fonts.System};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  overflow-x: hidden;
  font-feature-settings: "calt" 1, "clig" 1, "dlig" 1, "kern" 1, "liga" 1, "salt" 1;
`;

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              langs
            }
            author {
              name
              homeCity
              email
              defaultLink
            }
            sourceCodeLink
            menu {
              label
              link
              slug
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


