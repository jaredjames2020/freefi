import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  AlertIOS,
} from "react-native";

import useLocation from "../hooks/useLocation";
import getData from "../hooks/getData";
import getNearbyLocations from "../hooks/getNearbyLocations";
import MapScreen from "./MapScreen";
import MapView, { Marker } from "react-native-maps";

function WelcomeScreen(props) {
  const location = useLocation();
  const data = getData();
  const nearbyLocations = getNearbyLocations(data);
  const screen = Dimensions.get("window");

  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return (
    <View style={styles.container}>
      <MapScreen />
    </View>
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

export default WelcomeScreen;
