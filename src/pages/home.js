import React from "react";
// import {
//   Link
// } from "react-router-dom";
// import {Spinner, Intent} from "@blueprintjs/core";

import Map from '../components/map'

export default () => {

  return (
    <div className='flex-container'>
      <Map/>
      {/*<Spinner intent={Intent.WARNING} size={Spinner.SIZE_LARGE}/>*/}
    </div>
  )
}
