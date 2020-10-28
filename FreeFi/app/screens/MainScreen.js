import React, { useState, useEffect, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import GetMarker from "../hooks/getMarker";
import * as Location from "expo-location";

const App = () => {
  const heading = "FreeWiFiNYC";
  const subheader = "Find wifi and charging stations!";

  return (
    <Fragment>
      <Header value={heading} />
      <Subheader value={subheader} />
      <Map />
    </Fragment>
  );
};

function Map() {
  const user = UserLocation();
  const marker = GetMarker();

  return (
    <>
      <MapView
        style={styles.map}
        region={{
          latitude: user.latitude || 40.7559,
          longitude: user.longitude || -73.9871,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
      >
        {marker}
      </MapView>
    </>
  );
}

function UserLocation() {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}

function Header(props) {
  return (
    <SafeAreaView>
      <Text style={styles.logo}>{props.value}</Text>
    </SafeAreaView>
  );
}
function Subheader(props) {
  return (
    <SafeAreaView>
      <Text style={styles.subheader}>{props.value}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    width: "100%",
    height: "100%",
  },
  logo: {
    backgroundColor: "#9cc3d5ff",
    alignItems: "center",
    padding: 5,
    textAlign: "center",
    fontSize: 28,
    fontFamily: "Courier",
    color: "#0063b2ff",
    fontWeight: "bold",
  },
  subheader: {
    backgroundColor: "#9cc3d5ff",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Courier",
    color: "white",
    paddingBottom: 4,
  },
  buttons: { backgroundColor: "blue" },
  map: {
    backgroundColor: "orange",
    height: "93%",
    width: "100%",
    margin: 3,
  },
});

export default App;
