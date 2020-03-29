import React from 'react';

import Map from './index';
import {getProps} from "./data";

export default {
  title: 'Map',
  component: Map,
}

export const withData = () => <Map {...getProps()}/>
export const withoutData = () => <Map/>


