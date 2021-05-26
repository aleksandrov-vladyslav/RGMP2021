import React from 'react';
import Link from 'next/link'

import SiteLogo from '../components/SiteLogo/SiteLogo';
import Button from '../components/Button/Button';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <SiteLogo />
      <div className="not-found__content">
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__code">404</p>
        <Link href="/">
          <Button classList="not-found__home-button" color="red-transparent" variant="big">GO BACK TO HOME</Button>
        </Link>
      </div>
    </div>
  );
}
 
export default NotFound;