import React from "react";
import getNearbyLocations2 from "../hooks/getNearbyLocations2";
import getData from "../hooks/getData";
import { Marker } from "react-native-maps";

export default getMarker2 = () => {
  const data = getData();
  const nearbyLocations2 = getNearbyLocations2(data);

  return nearbyLocations2.map((location) => {
    return (
      <Marker
        key={location.objectid}
        coordinate={{
          latitude: parseFloat(location.latitude),
          longitude: parseFloat(location.longitude),
        }}
        title={location.name}
      ></Marker>
    );
  });
};
