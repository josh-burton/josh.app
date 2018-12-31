import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GoogleIcon from 'react-icons/lib/fa/google-plus';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import styled from 'styled-components';
import { visible } from '../constants/responsive'; 
// import Clap from 'react-clap-button';
import links from '../constants/socialLinks';


const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.socialLinks.margin};
  padding: ${props => props.theme.socialLinks.padding};
  list-style: none;
`;

const A = styled.a`
  color: ${props => props.theme.socialLinks.a.color};
  text-decoration: none;
  font-size: ${props => props.theme.socialLinks.a.fontSize};
  display: inline-block;
  margin: ${props => props.theme.socialLinks.a.margin};
  padding: ${props => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  transform: translateY(230px) translateX(-80px);
  ${visible.lg}
`;

// const ClapWrapper = styled.div`
//   margin-bottom: 20px;
// `;

const ShareWidget = ({ url, message }) => {
  return (
    <Wrapper>
      <Ul>
        {/* <li>
          <ClapWrapper>
            <Clap
              count={0}
              countTotal={0}
              isClicked={false}
              maxCount={50}
              theme={{
                size: 60
              }}
            />
          </ClapWrapper>
        </li> */}
        <li>
          <A href={links.twitter(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on twitter"
            title="Share on twitter">
            <TwitterIcon />
          </A>
        </li>
        <li>
          <A href={links.facebook(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on facebook"
            title="Share on facebook">
            <FacebookIcon />
          </A>
        </li>
        <li>
          <A href={links.linkedin(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Linkedin"
            title="Share on Linkedin">
            <LinkedinIcon />
          </A>
        </li>
        <li>
          <A href={links.google(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Google+"
            title="Share on Google+">
            <GoogleIcon />
          </A>
        </li>
      </Ul>
    </Wrapper>
  );
};

ShareWidget.propTypes = {
  url: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default ShareWidget;
