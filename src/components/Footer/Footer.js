import React from 'react';

import SiteLogo from '../common/SiteLogo/SiteLogo';

import './Footer.scss';

const Footer = () => {
  return ( 
    <div className="page-footer">
      <div className="page-footer__wrapper container">
         <SiteLogo/>
      </div>
    </div>
  );
}
 
export default Footer;