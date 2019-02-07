import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <p>I&rsquo;d love to <strong>chat</strong> and <strong>meet new people</strong>. I&rsquo;m looking for <strong>problems worth solving</strong>, a place that will <strong>challenge me</strong>, and <strong>opportunities</strong> that I can help others and myself <strong>grow</strong>.&nbsp;</p>
      <p>Let&rsquo;s do something awesome.</p>
      <p>Email:&nbsp;<a href="mailto:josh@arklabs.nz">josh@arklabs.nz</a><br />Linkedin:&nbsp;<a href="https://www.linkedin.com/in/joshburtonnz/" target="_blank">https://www.linkedin.com/in/joshburtonnz/</a><br />GitHub:&nbsp;<a href="http://github.com/athornz" target="_blank">http://guthub.com/athornz</a></p>
    </>
  ),
  description: `
    I’d love to chat and meet new people. I’m looking for problems worth solving, a place that will challenge me, and opportunities that I can help others and myself grow. 
  `
};

export default (props) => <Page i18n={i18n} {...props} />;
