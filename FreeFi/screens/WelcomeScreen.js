import React from "react";
import { View, StyleSheet, Text } from "react-native";

import useLocation from "../hooks/useLocation";

function WelcomeScreen(props) {
  const location = useLocation();
  console.log(location);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default WelcomeScreen;
