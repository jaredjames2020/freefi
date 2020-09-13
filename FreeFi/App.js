import * as React from "react";
import Modal from "react-native-modal";
import { StyleSheet, SafeAreaView, Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SideMenu from "./app/screens/SideMenu";
import NeighborhoodScreen from "./app/screens/NeighborhoodScreen";
import MapScreen from "./app/screens/MapScreen";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      <View style={styles.container}>
        <MapScreen />
        <Button
          onPress={() => navigation.navigate("Search")}
          title="Go to notifications"
        />
      </View>
    </SafeAreaView>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <NeighborhoodScreen />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    margin: 12,
    flex: 1,
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    color: "#444",
    fontSize: 14,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
