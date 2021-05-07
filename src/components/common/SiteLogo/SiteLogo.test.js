import React from 'react';
import { render } from '@testing-library/react';

import SiteLogo from './SiteLogo';

describe('SiteLogo', () => {
  it('render SiteLogo snapshot', () => {
    const { asFragment } = render(<SiteLogo />);

    expect(asFragment(<SiteLogo />)).toMatchSnapshot();
  })
});