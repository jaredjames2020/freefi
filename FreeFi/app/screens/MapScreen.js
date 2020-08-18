import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import getNearbyLocations from "../hooks/getNearbyLocations";
import getData from "../hooks/getData";
import getMarker from "../hooks/getMarker";

import MapView, { Marker } from "react-native-maps";
import useLocation from "../hooks/useLocation";

function MapScreen(props) {
  const screen = Dimensions.get("window");
  const data = getData();
  const nearbyLocations = getNearbyLocations(data);
  const marker = getMarker();
  const location = useLocation();

  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    >
      {marker}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
