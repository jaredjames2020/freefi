import { useEffect, useState } from "react";
import * as Location from "expo-location";
import BottomSearchInput from "../components/BottomSearchInput";

export default getLocationFromString = (input) => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      let result = await Location.geocodeAsync(input);
      setLocation({ result });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // console.log(location);
  // console.log(BottomSearchInput().value);

  return location;
};
