import React from "react";

import LineGraph from '../../components/lineGraph'
import {getProps} from '../../components/lineGraph/data'

export default (props = {}) => {

  const {payload = {}} = props;
  const {sensor = {}} = payload;
  const {types = {}} = sensor;

  const knownTypes = Object.keys(types);

  return (
    <div className='flex-container'>
      {knownTypes.map(type => <LineGraph key={type} {...getProps()}/>)}
    </div>
  )
}
