import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Spinner, Intent} from "@blueprintjs/core";

import HomeComponent from "./homeComponent";
import {fetchSensors} from "./homeDuck";

import cities from './cities'

const HomeContainer = (props) => {
  const {isLoading, sensors} = props;

  useEffect(() => {
    cities.forEach((city) => props.fetchSensors(city))
  }, [])

  if (isLoading) {
    return <Spinner intent={Intent.WARNING} size={Spinner.SIZE_LARGE}/>
  }

  return (
    <HomeComponent payload={{sensors}}/>
  )
}

// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) => {
  const {home} = state
  const {isLoading, sensors} = home

  return {isLoading, sensors}
};

// ... normally is an object full of action creators
const mapDispatchToProps = {
  fetchSensors: fetchSensors
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);



