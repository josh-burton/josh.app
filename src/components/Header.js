import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Helmet from 'react-helmet';
import Menu from './Menu';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const headerTheme = (theme, isHome) =>
  isHome
    ? theme.header.isHome
    : theme.header;

const Title = styled(({ isHome, ...props }) => <Link {...props} />)`
  display: block;
  font-size: ${props => headerTheme(props.theme, props.isHome).title.fontSize};
  text-align: ${props => headerTheme(props.theme, props.isHome).title.textAlign};
  padding: ${props => headerTheme(props.theme, props.isHome).title.padding};
  margin: ${props => headerTheme(props.theme, props.isHome).title.margin};
  line-height: ${props => headerTheme(props.theme, props.isHome).title.lineHeight};
`;

const SubTitle = styled.p`
  font-size: ${props => headerTheme(props.theme, props.isHome).subTitle.fontSize};
  padding: ${props => headerTheme(props.theme, props.isHome).subTitle.padding};
  margin: ${props => headerTheme(props.theme, props.isHome).subTitle.margin};
`;

const Wrapper = styled.header`
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05) !important;
  transition: top 0.2s ease-in-out;
  padding: .8rem 1rem;
  height: 4rem;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 9;
  ${({theme, isHome}) => isHome
    ? ``
    : `
      @media (min-width: 40rem) {  
      
        display: flex;
        justify-content: space-between;
    
        .title {
          padding-top: ${theme.scale(2)};
          order: 0;          
        }
    
        .select-languages{
          order: 1;          
        }    
      }
  `}  
`;

const Header = ({ menu, isHome, homeLink, url }) => {
  return (
    <Wrapper isHome={isHome}>
      <FormattedMessage id="title">
        {(txt) => (
          <Helmet
            defaultTitle={txt}
            titleTemplate={`%s | ${txt}`}
          />
        )}
      </FormattedMessage>
      {/* */}
      {/* <FormattedMessage id="header.title">
        {(title) => (
          <Title to={homeLink} isHome={isHome} className="title">
            {title}
            <FormattedMessage id="header.subTitle">
              {(subTitle) => (
                <SubTitle isHome={isHome}>{subTitle}</SubTitle>
              )}
            </FormattedMessage>
          </Title>
        )}
      </FormattedMessage> */}
      <Menu menu={menu} url={url} />
    </Wrapper>
  );
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
  homeLink: PropTypes.string,
  url: PropTypes.string
};

export default Header;
