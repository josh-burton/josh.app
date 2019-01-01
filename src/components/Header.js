import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Menu from './Menu';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import FixedContainer from './FixedContainer';

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
`;

const Header = ({ menu, url }) => {
  return (
    <Wrapper>
      <FixedContainer>
        <FormattedMessage id="title">
          {(txt) => (
            <Helmet
              defaultTitle={txt}
              titleTemplate={`%s | ${txt}`}
            />
          )}
        </FormattedMessage>
        <Menu menu={menu} url={url} />
      </FixedContainer>
    </Wrapper>
  );
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  url: PropTypes.string
};

export default Header;
