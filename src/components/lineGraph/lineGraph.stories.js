import React from 'react';

import LineGraph from './index'
import {getProps} from './data'

export default {
  title: 'LineGraph',
  component: LineGraph,
};

export const withData = () => <LineGraph {...getProps()}/>;
export const withoutData = () => <LineGraph/>;



