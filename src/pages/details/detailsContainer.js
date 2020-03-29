import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Spinner, Intent} from "@blueprintjs/core";

import DetailsComponent from "./detailsComponent";
import {fetchSensorAverage} from "./detailsDuck";

const types = ['pm10'];

const DetailsContainer = (props) => {
  const {fetchSensorAverage, sensor} = props;

  useEffect(() => {
    const param = {
      cityName: 'cluj-napoca',
      sensorId: 'c48c8361-7d5f-41ac-8b38-e003f16033ff',
      fromDateTime: '2019-02-25T02:00:00%2b01:00',
      toDateTime: '2020-02-02T02:00:00%2b01:00'
    };

    fetchSensorAverage(param)
  }, [])

  return (
    <DetailsComponent payload={{sensor}}/>
  )
}

// ... computed data from state and optionally ownProps
const mapStateToProps = (state, ownProps) => {
  const {details} = state
  const {isLoading, sensor} = details

  return {isLoading, sensor}
};

// ... normally is an object full of action creators
const mapDispatchToProps = {
  fetchSensorAverage
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);



