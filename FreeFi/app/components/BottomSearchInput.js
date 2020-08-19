import React, { Component } from "react";
import { TextInput } from "react-native";

const BottomSearchInput = () => {
  const [value, onChangeText] = React.useState("SEARCH");

  return (
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
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default BottomSearchInput;
