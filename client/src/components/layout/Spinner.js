import React, { Fragment } from 'react';
import spinnerLink from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinnerLink}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);
