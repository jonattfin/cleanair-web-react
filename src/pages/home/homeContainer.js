import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Spinner, Intent} from "@blueprintjs/core";

import HomeComponent from "./homeComponent";
import {fetchSensors} from "./homeDuck";

import cities from './cities'

const HomeContainer = (props) => {
  const {sensors} = props;

  useEffect(() => {
    cities.filter(c => c.includes('cluj')).forEach((city) => props.fetchSensors({city}))
  }, [])

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



