import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useTextInput from "../hooks/useTextInput";
import getLocationFromString from "../hooks/getLocationFromString";

const BottomSearchInput = () => {
  const [text, setText] = useState();

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
      <Button
        onPress={() => getLocationFromString(text)}
        title="Click"
      ></Button>
    </View>
  );
};

export default BottomSearchInput;
