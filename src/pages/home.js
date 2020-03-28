import React from "react";
// import {
//   Link
// } from "react-router-dom";
import {Spinner, Intent} from "@blueprintjs/core";

export default () => {

  return (
    <div className='flex-container'>
      <Spinner intent={Intent.WARNING} size={Spinner.SIZE_LARGE}/>
    </div>
  )
}
