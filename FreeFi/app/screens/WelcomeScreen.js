import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import useLocation from "../hooks/useLocation";
import getData from "../hooks/getData";
import getNearbyLocations from "../hooks/getNearbyLocations";
import MapScreen from "./MapScreen";
import MapView from "react-native-maps";

function WelcomeScreen(props) {
  const location = useLocation();
  const data = getData();
  const nearbyLocations = getNearbyLocations(data);
  MapScreen();

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.loading ? (
          <Text>Loading ...</Text>
        ) : (
          <View>
            {nearbyLocations.map((item) => (
              <Text key={item.objectid}>{item.name}</Text>
            ))}
          </View>
        )}
      </ScrollView>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
      <Text>YUYUx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WelcomeScreen;
