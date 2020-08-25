import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useTextInput from "../hooks/useTextInput";
import getLocationFromString from "../hooks/getLocationFromString";
import * as Location from "expo-location";
import getNearbyLocations from "../hooks/getNearbyLocations";

export default BottomSearchInput = () => {
  const [text, setText] = useState();
  const [location, setLocation] = useState({});

  const getLocation = async (input) => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      let result = await Location.geocodeAsync(input);
      setLocation({ result });
    } catch (error) {
      console.log(error);
    }
    return location;
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View>
      <TextInput
        style={{
          margin: 15,
          height: 40,
          width: "95%",
          borderColor: "black",
          borderWidth: 3,
          padding: 7,
          borderRadius: 10,
        }}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Search location"
      />
      <Button onPress={() => getLocation(text)} title="Click"></Button>
    </View>
  );
};
