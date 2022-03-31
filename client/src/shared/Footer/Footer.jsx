import React from 'react';
import socialMedia from '../../assets/images/social-icons.jpg';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { footerTabs } from '../../static/FooterTabs';

const Footer = () => {
  return (
    <div className='footer padding-0-8 pt-4'>
      <Container fluid>
        <ul>
          {footerTabs &&
            footerTabs.map((tab, index) => {
              return (
                <>
                  {' '}
                  <li key={tab.key}>
                    <Link to={tab.url}>{tab.name}</Link>
                  </li>
                </>
              );
            })}
        </ul>
        <div className='copyright-text'>
          <p>Copyright &copy; 2021 STARZPLAY. All rights reserved.</p>
        </div>
        <div className='social mb-4'>
          <img src={socialMedia} alt='description' />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
