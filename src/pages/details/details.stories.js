import React from 'react';

import DetailsComponent from './detailsComponent'

export default {
  title: 'Details page',
  component: DetailsComponent,
};

export const withData = () => <DetailsComponent {...getProps()}/>;

function getProps() {
  return {
    payload: {
      sensor: {
        types: {
          pm10: [],
          pm25: [],
        }
      }
    }
  }
}



