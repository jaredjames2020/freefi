import React from "react";
import getNearbyLocations from "../hooks/getNearbyLocations";
import getData from "../hooks/getData";
import { Marker } from "react-native-maps";

export default getMarker = () => {
  const data = getData();
  const nearbyLocations = getNearbyLocations(data);

  return nearbyLocations.map((location) => {
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
