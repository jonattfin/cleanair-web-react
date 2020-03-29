import React from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.css';

export default (props) => {
  const {data = []} = props;

  return (
    <LeafletMap style={{height: '100vh', width: '100vw'}} center={[45.56394, 25.00340]} zoom={7}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {data.map((item, index) => (
          <Marker
            key={`map_index_${index}`}
            position={item.position}
          >
            <Popup maxWidth="480px">
              <div style={{height: "100px", minWidth: "100px"}}>
                {/*{item.pm10}*/}
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </LeafletMap>
  )
}


