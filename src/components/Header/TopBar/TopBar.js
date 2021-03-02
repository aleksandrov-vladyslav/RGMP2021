import React from 'react';

import './TopBar.scss';

import SiteLogo from '../../common/SiteLogo/SiteLogo';
import Button from '../../common/Button/Button';

const TopBar = () => {
  return ( 
    <div className="top-bar">
      <SiteLogo/>
      <Button variant="medium" color="grey">+ ADD MOVIE</Button>
    </div>
  );
}
 
export default TopBar;