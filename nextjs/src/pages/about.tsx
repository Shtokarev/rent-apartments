import React from 'react';
import { getBaseLayout } from '@app/layouts';
import { NextPageWithLayout } from '@app/types';

const About: NextPageWithLayout<{}> = () => (
  <div style={{ height: '400px', width: '500px', backgroundColor: 'pink' }}>ABOUT</div>
);

About.getLayout = getBaseLayout;

export default About;
