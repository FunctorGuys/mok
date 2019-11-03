import React, { Fragment } from 'react';
import WhatWeAreDoing from '../homepage/WhatWeAreDoing';
import Intro from '../homepage/Intro';
import About from '../homepage/About';

const Landing = () => {
  return (
    <Fragment>
      <Intro />
      <WhatWeAreDoing />
      <About />
    </Fragment>
  );
};

export default Landing;
