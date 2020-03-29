import React from 'react';
import {action} from '@storybook/addon-actions';
import LineGraph from './index'

export default {
  title: 'LineGraph',
  component: LineGraph,
};

export const withData = () => <LineGraph onClick={action('clicked')}/>;
export const withoutData = () => <LineGraph onClick={action('clicked')}/>;

