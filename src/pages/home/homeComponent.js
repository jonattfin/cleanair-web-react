import React from "react";

import Map from '../../components/map'

export default (props) => {
  const {payload = {}} = props;
  const {sensors = []} = payload;

  return (
    <div className='flex-container'>
      <Map payload={{sensors}}/>
    </div>
  )
}
