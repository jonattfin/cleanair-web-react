import React from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'

import {IconNames} from "@blueprintjs/icons";
import {Colors} from "@blueprintjs/core";

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.css';

export default (props) => {
  const {payload = {}} = props;
  let {sensors = []} = payload;

  sensors = sensors.filter(s => s.status === 'ACTIVE');

  return (
    <LeafletMap style={{height: '100vh', width: '100vw'}} center={[45.56394, 25.00340]} zoom={7}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {sensors.map((sensor, index) => (
          <Marker
            key={`map_index_${index}`}
            position={sensor.position.split(',')}
            icon={getIcon(sensor)}>
            >
            <Popup>
              {showSummary(sensor)}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </LeafletMap>
  )
}

function showSummary(sensor) {
  const {sensorId, description, status, position} = sensor;

  return (
    <div>
      <div><b>description:</b> {description}</div>
      <div><b>status:</b> {status}</div>
      <div><b>position:</b> {position}</div>
      <div><b>sensorId:</b> {sensorId}</div>
      <div>&nbsp;</div>
      <div><a href="/details" target="_blank">Go to details</a></div>
    </div>
  )
}

function getIcon(sensor) {

  const markerHtmlStyles = (color, bgColor) => `
    background-color: ${color};
    border: 1px solid ${bgColor};
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    left: -1.1rem;
    position: relative;
    transform: rotate(45deg);
  `;

  const html = `
    <div/>
      <span style="${markerHtmlStyles(Colors.INDIGO1, Colors.GOLD5)}"/>
    </div>
  `;

  return L.divIcon({
    className: IconNames.ARROW_LEFT,
    iconAnchor: [0, 24],
    html: html,
  })
}


