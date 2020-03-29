import React from 'react';

import Map from './index';

export default {
  title: 'Map',
  component: Map,
}

export const withData = () => <Map {...getProps()}/>
export const withoutData = () => <Map/>

function getProps() {
  return {
    data: [
      {position: [45.56394, 25.00340]},
      {position: [45.56394, 25.00340]},
      {position: [45.56394, 25.00340]},
    ]
  }
}
